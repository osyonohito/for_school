function calculate() {
    // -----------------------------------------------------
    // 🍎 Step 1: データの準備と取得
    // -----------------------------------------------------

    // 栄養素のラベル、単位、HTMLのIDを配列として定義
    // これにより、表示や計算の基準が一つにまとまり、修正しやすくなります。
    const NUTRITION_INFO = [
        { label: '合計カロリー', unit: ' kcal', id: 'resultCalories' },
        { label: '炭水化物', unit: ' g', id: 'resultCarbs' },
        { label: 'タンパク質', unit: ' g', id: 'resultProtein' },
        { label: '脂質', unit: ' g', id: 'resultFat' },
        { label: 'ミネラル', unit: ' mg', id: 'resultMinerals' },
        { label: 'ビタミン', unit: ' mg', id: 'resultVitamins' }
    ];

    // 選択された各食事の栄養価を取得し、数値の配列に変換する
    // 【解説: .map(Number)】 valueの文字列 (例: "200.0, 51.9, ...") を
    //   .split(',') で区切った後、それぞれの要素を安全な数値に変換しています。
    const shushokuValues = document.getElementById('shushoku').value.split(',').map(Number);
    const shusaiValues = document.getElementById('shusai').value.split(',').map(Number);
    const fukusaiValues = document.getElementById('fukusai').value.split(',').map(Number);

    // 主食・主菜・副菜のデータを一つの配列にまとめます（計算をループさせるため）
    const selectedFoods = [shushokuValues, shusaiValues, fukusaiValues];

    // 合計値を格納する配列を初期化 (6種類の栄養素の合計を 0 で準備)
    let totalNutritions = new Array(NUTRITION_INFO.length).fill(0);


    // -----------------------------------------------------
    // 🥦 Step 2: 栄養素の合計計算 (二重ループによる効率化)
    // -----------------------------------------------------
    
    // 【💡 解説: 外側の for ループ】
    //   i は食品の種類（主食、主菜、副菜）を順番に取り出すための番号（インデックス）
    for (let i = 0; i < selectedFoods.length; i++) {
        // i番目の食品の栄養価リスト（[カロリー, 炭水化物, ...]）を取得
        const foodValues = selectedFoods[i]; 

        // 【💡 解説: 内側の for ループ】
        //   j は栄養素の種類（カロリー、炭水化物、...）を順番に取り出すための番号
        for (let j = 0; j < foodValues.length; j++) {
            
            // j番目の栄養素の合計に、
            // i番目の食品の j番目の栄養素の値を加算する
            totalNutritions[j] += foodValues[j];
        }
    }


    // -----------------------------------------------------
    // 📊 Step 3: 結果の表示 (forループ)
    // -----------------------------------------------------

    // 【解説: forループによる表示】 6回繰り返していた document.getElementById を1つのループにまとめました。
    for (let i = 0; i < NUTRITION_INFO.length; i++) {
        const item = NUTRITION_INFO[i];
        const totalValue = totalNutritions[i];

        // 結果を小数点以下第1位に丸めて表示（見やすさのため）
        document.getElementById(item.id).textContent = 
            `${item.label}: ${totalValue.toFixed(1)}${item.unit}`;
    }


    // -----------------------------------------------------
    // 📢 Step 4: アドバイスの判定と表示 (栄養士の視点)
    // -----------------------------------------------------
    
    // 必要な栄養素の合計値を取得（配列のインデックスを使用）
    let totalCalories = totalNutritions[0];
    let totalProtein_g = totalNutritions[2]; // タンパク質 (g)
    let totalFat_g = totalNutritions[3];     // 脂質 (g)
    let totalCarbs_g = totalNutritions[1];    // 炭水化物 (g)
    let totalMinerals_mg = totalNutritions[4];
    let totalVitamins_mg = totalNutritions[5];

    // 判定基準 (栄養士の観点から設定)
    const CAL_MIN = 550; const CAL_MAX = 750;
    const P_MIN = 18.0;   
    const F_MIN = 12.0;
    const C_MAX = 80.0;
    const MV_MIN = 150; // ミネラル+ビタミンの簡易チェック

    let adviceMessage = "";
    let isPerfect = true; // すべての条件を満たしているか判定するフラグ

    // 1. カロリーチェック
    if (totalCalories < CAL_MIN) {
        adviceMessage = "【カロリー不足】カロリーが少ないぞ。若者はもっと食べるんじゃ！";
        isPerfect = false;
    } else if (totalCalories > CAL_MAX) {
        adviceMessage = "【カロリー過多】食べすぎじゃ！";
        isPerfect = false;
    } 
    
    // 2. 栄養素のバランスチェック (カロリーが適正の場合も不足をチェック)
    if (isPerfect) {
        if (totalProtein_g < P_MIN) {
            adviceMessage = "【P不足】タンパク質が不足しておるぞ。主菜を見直してみてはいかがかの？(目標: 18g以上)";
            isPerfect = false;
        } else if (totalFat_g < F_MIN) { 
            adviceMessage = "【F不足】脂質が少ないのう。きちんと取らないと、体に悪いぞ？(目標: 12g以上)";
            isPerfect = false;
        } else if (totalCarbs_g > C_MAX) {
            adviceMessage = "【C過多】炭水化物が多すぎるぞ。主食の量を減らすのじゃ！(目標: 80g以下)";
            isPerfect = false;
        }
    }
    
    // 3. ミネラル・ビタミンのチェック (副菜の充足度チェック)
    if (isPerfect && (totalMinerals_mg + totalVitamins_mg < MV_MIN)) {
        adviceMessage = "【副菜不足】ミネラル・ビタミンが少ないぞ。もっと野菜を食べんか！(目標: 合計150mg以上)";
        isPerfect = false;
    }

    // 4. 最終的なアドバイス
    if (isPerfect) {
        adviceMessage = "完璧なバランスじゃ！この調子で健康を維持するのじゃぞ！";
    }

    // 吹き出しにアドバイスメッセージを表示
    document.getElementById('adviceBalloon').textContent = adviceMessage;
}
/* 
【健康かどうかの基準】
カロリー: 550-750 kcal
タンパク質: 18g以上
脂質: 12g以上
炭水化物: 80g以下
ミネラル+ビタミン: 150mg以上
*/