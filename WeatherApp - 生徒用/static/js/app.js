// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// 問題1~問題5の問題文を読み、指定された記述をせよ。
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

//問題１：変数名「elementLocationName」でid「location_name」（現在地名の要素）の取得をコーディングせよ




//問題２：変数名「elementWeatherIcon」でid「weather_icon」（天気のアイコン）の取得をコーディングせよ





//※下記を参考にして解きましょう
let elementNowTemperatureDegree = this.document.querySelector("#now_temperature_degree");   //現在の気温　　　　　　　　の要素
let elementMaxTemperatureDegree = this.document.querySelector("#max_temperature_degree");   //最高気温　　　　　　　　　の要素
let elementMinTemperatureDegree = this.document.querySelector("#min_temperature_degree");   //最低気温　　　　　　　　　の要素
let elementNowTemperatureUnit = document.querySelector("#now_temperature_unit");            //現在の単位 ex.「℃」　　　の要素
let elementMaxTemperatureUnit = document.querySelector("#max_temperature_unit");            //最高時の単位 ex.「℃」　　の要素
let elementMinTemperatureUnit = document.querySelector("#min_temperature_unit");            //最低時の単位 ex.「℃」　　の要素
let elementWeatherDescription = this.document.querySelector("#weather_description");        //天候名情報　　　　　　　  の要素
let elementDataHumidity = this.document.querySelector("#data_humidity");                    //湿度の値　　　　　　　　　の要素
let elementDataPressure = this.document.querySelector("#data_pressure");                    //気圧の値　　　　　　　　　の要素
let elementDataRainfallSnowfall = this.document.querySelector("#data_rainfall_snowfall");   //降水量の値　　　　　　　　の要素
let elementDataWind = this.document.querySelector("#data_wind");                            //風速の値　　　　　　　　　の要素
let elementDataCloudy = this.document.querySelector("#data_cloudy");                        //雲の量　　　　　　　　　　の要素
let elementDataSunriseSunset = this.document.querySelector("#data_sunrise_sunset");         //日の出入の値　　　　　　　の要素
let elementLabelRainfallSnowfall = this.document.querySelector("#label_rainfall_snowfall"); //「降水量」　　　　　　　　の要素
let elementReloadIcon = this.document.querySelector("#reload_icon");                        //リロードアイコン　　　　　の要素


//問題３：ページの読み込みが完了したときにviewWeather()が実行するようにコーディングせよ。
/** ページを読み込んだ時に{}内に書いた処理が動く
*  addEventListenerは、ターゲットに特定のイベントが配信されるたびに呼び出される関数
* （今回はターゲット：window, 特定のイベント：load） 

/*ここを適切な文字で置き換えてください*/
.addEventListener("load", () => {
  /*ここに実行する関数を宣言せよ*/

});

//問題４：リロードアイコンのHTMLをクリックしたときにviewWeather()が実行するようにコーディングせよ。
/** リロードアイコンを呼び出す変数は上記変数群から探してください*/ 

/*ここを適切な文字で置き換えてください*/
.addEventListener("click", () => {
  /*ここに実行する関数を宣言せよ*/
  viewWeather();
});

//問題５：viewWeather関数を定義せよ（処理内容は記述不要）

/*ここでviewWeather関数を宣言してください*/

//処理内容はコーディング不要


//※以下、viewWeather関数の処理内容
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜
// ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜
// ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜
// ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜
// ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜ここより下は確認不要｜
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼



  /**  位置情報の取得に対応しているか(対応している場合端末にデフォルトで入っている)objで確認
  *    ブラウザで「位置情報を取得しますか」と使用許可を求めて、許可された場合にその位置情報をpositionに入れてそこから緯度と経度を取り出している
  */
  if (this.navigator.geolocation) {                 //疑問点：navigator.geolocationの記述＝位置情報を取得しますかを表示
    this.navigator.geolocation.getCurrentPosition(//現在位置を取得するメソッド

      //以下からの記述は現在位置の取得が成功したら実行される関数（６４～１２２行目まで1つの関数）

      (position) => {                               //position：「this.navigator.geolocation.getCurrentPosition」の結果
        let lon = position.coords.longitude;        //経度(coordsは「座標」)
        let lat = position.coords.latitude;         //緯度


        /** API_KEYはAPIを使用するためのアクセストークン（認証済みユーザーを識別するための文字列）
        *   URLはAPIのリクエストURL
        */

        const API_KEY = "360a9abe01d23bae800998614820c40b"
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ja`;



        /**  fetchは非同期通信。
        *
        *    各オブジェクトの意味
        *    fetch(URL)         =Promiseオブジェクト(※非同期処理の完了 (もしくは失敗) の結果およびその結果)
        *    fetch(URL)の実行結果=Response オブジェクト
        *
        *    fetch(URL)の実行結果（Responseオブジェクト）を then() メソッドで処理
        */



        this.fetch(URL).then((response) => {//通信が成功したらthen()が動いて、失敗したらcatch()が動く ※try-catchではない
          return response.json();           //次のthen() メソッドにJSON オブジェクトを渡している
        }).then((data) => {                 //data = response.json()

          //１．データの取り出し
          let weatherId = data.weather[0].id;                                                      //取り出した天気ID情報
          let weatherIcon = data.weather[0].icon;                                                    //取り出した天気アイコン情報
          let weatherDescription = data.weather[0].description;                                             //取り出した天候名情報
          let temperature = data.main.temp;                                                          //取り出した現在の気温情報
          let minTemperature = data.main.temp_min;                                                      //取り出した最低気温情報
          let maxTemperature = data.main.temp_max;                                                      //取り出した最高気温情報
          let pressure = data.main.pressure;                                                      //取り出した気圧情報
          let humidity = data.main.humidity;                                                      //取り出した湿度情報
          let speed = data.wind.speed;                                                         //取り出した風速情報
          let windDegree = data.wind.deg;                                                           //取り出した風度情報
          let cloudsAll = data.clouds.all;                                                         //取り出した雲の量情報
          let rainOrSnow = "rain" in data ? data.rain["1h"] : "snow" in data ? data.snow["1h"] : 0; //取り出した1時間当たりの降水or降雪量の値情報　　　　(三項演算子)
          let labelRainOrSnow = "rain" in data ? "降水量" : "snow" in data ? "降雪量" : "降水量";         //取り出した降水量or降雪量のラベル情報(三項演算子)
          let sunrise = data.sys.sunrise;                                                        //取り出した日の出情報
          let sunset = data.sys.sunset;                                                         //取り出した日の入り情報
          let timezone = data.timezone;                                                           //取り出した時間情報

          //２．書き換え（HTML要素へ取り出したデータのテキスト内容を(textContentプロパティを用いて)新しく書き込む）
          elementNowTemperatureDegree.textContent = temperature;                                         //現在の気温HTML要素に、取り出した現在の気温情報を格納
          elementMinTemperatureDegree.textContent = minTemperature;                                        //最低気温HTML要素に、取り出した最低気温情報を格納
          elementMaxTemperatureDegree.textContent = maxTemperature;                                        //最高気温HTML要素に、取り出した最高気温情報を格納
          elementWeatherDescription.textContent = weatherDescription;                                    //天候名HTML要素に、取り出した天候名情報を格納
          elementDataHumidity.textContent = humidity;                                              //湿度HTML要素に、取り出した湿度情報を格納
          elementDataPressure.textContent = pressure;                                              //気圧HTML要素に、取り出した気圧情報を格納
          elementLabelRainfallSnowfall.textContent = labelRainOrSnow;                                       //ラベルHTML要素に、取り出したラベル情報を格納
          elementDataRainfallSnowfall.textContent = rainOrSnow;                                            //1時間当たりの降水or降雪量HTML要素に、取り出したをdataを格納
          elementDataWind.textContent = convertWindToString(speed, windDegree);                //方角と風速のHTML要素に、「方角と風速を1つの文字列として返す関数」の実行結果を格納
          elementDataCloudy.textContent = cloudsAll;                                             //雲の量HTML要素に、取り出した雲の量情報を格納
          elementDataSunriseSunset.textContent = cnvertSunriseSunsetToString(sunrise, sunset, timezone);//日の出入りHTML要素に、「日の出入り情報を返す関数」の実行結果を格納
          setName(lon, lat, elementLocationName);                                                           //経度,緯度,現在地名
          setIcons(weatherIcon, elementWeatherIcon, weatherId);                                             //２,天気のアイコンのHTML要素,取り出した天気ID          

          //カ氏の単位をセ氏に変換　デフォルトの単位をセ氏にしている
          if (elementNowTemperatureUnit.textContent === "℉") {
            elementNowTemperatureUnit.textContent = "℃";
            elementMaxTemperatureUnit.textContent = "℃";
            elementMinTemperatureUnit.textContent = "℃";
          }

        }).catch((fail) => {
          this.alert("OpenWeatherMapに接続できませんでした");//「データの取り出し」にて通信エラーがあった際の処理　then-catch
        })
      },
      (fail) => {//位置情報が取得できない場合(端末が対応していない場合、位置情報の取得を許可しなかった場合の処理)
        this.alert("位置情報が取得できませんでした")
      }
    );
  }
}

/**
 * 以下、日の出/日の入り時刻を返す関数
 */

//日の出、日の入り時刻を求め文字列に変換する
//実行する関数でdataの中に入っているsunriseとsunsetを使用している
function cnvertSunriseSunsetToString(sunrise, sunset, timezone) {
  let stringSunrise = convertUnixTimeToHourMinute(sunrise, timezone);
  let stringSunset = convertUnixTimeToHourMinute(sunset, timezone);
  let formatString = stringSunrise + " - " + stringSunset;

  return formatString;
}

function convertUnixTimeToHourMinute(unixTime, timezone) {
  let timestamp = (unixTime * 1000 + timezone);                 //unixTime：コンピューターシステム上での時刻表現の一種、timezone：場所ごとの標準時間帯
  let date = new Date(timestamp);                               //タイムスタンプから時間を生成：タイムスタンプをnew Date()で初期化する際に引数として指定　※timestamp(ミリ秒)
  let formatString = date.getHours() + ":" + date.getMinutes();

  return formatString;
}



/**
 * 方角と風速を1つの文字列として返す関数
 */
function convertWindToString(speed, degree) {
  const DIRECTION_LIST = ["北", "北北東", "北東", "東北東", "東", "東南東", "南東", "南南東", "南", "南南西", "南西", "西南西", "西", "西北西", "北西", "北北西", "北"];
  let index = Math.round(degree / 22.5);//degree=風の角度(360度中)  22.5=360を16で割った値➡割った結果＝要素番号　
  let formatString = DIRECTION_LIST[index] + " " + speed;

  return formatString;
}



/**
 * 県名と市名を書き換える(緯度,経度から地名を求めて設定する)関数
 */
function setName(lon, lat, nameId) {
  const URL = `https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=${lat}&lon=${lon}`;

  //fetchの戻り値がresponseに入り、response.json()の戻り値がdataに入る
  this.fetch(URL).then((response) => {
    return response.json();
  }).then((data) => {

    /**
     * １．muni.js(ローカルファイル)で地名を管理しているGSI(国土交通省国土地理院)のmuniCd(配列の要素番号)で地域名を指定
     * ２．「１．」を基準に詳細を取得していく
     * ３. 県と市のHTML要素の書き換え
     * parseInt関数：文字列の引数を解析し、指定された基数 (数学的記数法の底) の整数値を返す
     */

    //１
    let muniCd = parseInt(data.results.muniCd);
    let detailArray = GSI.MUNI_ARRAY[muniCd].split(","); //spilitも用いて、都道府県名と市区町村を(カンマで)分けて取得

    //２
    let prefecture = detailArray[1];                     //splitで分割した際、多重配列になっている[muniCd][muniCdで細分化した要素番号]
    let municipalities = detailArray[3];
    let formatString = `${prefecture} ${municipalities}`;

    //３
    nameId.textContent = formatString;

    /**
     * 疑問点
     * ・importせず、外部ファイルのクラス利用できる？
     */

  })
}



/**
 * 天気のアイコンを設定する関数
 */
function setIcons(icon, element, weatherID) {
  let currentIcon;

  /**
   * iconの一番後ろの文字だけで条件分岐
   * 
   * substrメソッド ：任意の文字列の中から指定した文字列を抽出して切り出すメソッド
   * 構文　　　　　　：str.substr( 開始位置, 切り出す長さ ) 
   * 補足　　　　　　：長さは省略可能
   * 　　　　　　　　　負の数を指定する場合、文字列の末尾から数える
   */
  if (icon.substr(-1) === "d") {//午前
    switch (icon) {
      case "01d"://晴れ
        currentIcon = "CLEAR_DAY";
        break;

      case "02d"://晴れ
        currentIcon = "PARTLY_CLOUDY_DAY";
        break;

      case "03d"://晴れ
        currentIcon = "PARTLY_CLOUDY_DAY";
        break;

      case "04d"://曇り
        if (weatherID === 804) {
          currentIcon = "CLOUDY";
        } else {
          currentIcon = "PARTLY_CLOUDY_DAY";
        }
        break;

      case "09d": //雨 「weatherIDが520,521,522,531の中に含まれていたら」の条件分岐
        if ([520, 521, 522, 531].includes(weatherID)) {
          /**
           * includes
           * 
           * 配列内にある特定の要素が存在するかどうかをチェック
          * 構文：配列.includes(要素)
          * 戻値：引数に指定した要素が配列内に含まれていればtrueを返し、含まれていない場合はfalseを返す
          * 備考：配列（Array）オブジェクトの既存メソッドのひとつ
          */

          currentIcon = "SHOWERS_DAY";
        } else {
          currentIcon = "SLEET"; //みぞれ
        }
        break;

      case "10d"://雨
        currentIcon = "RAIN";
        break;

      case "13d"://雪
        if ([620, 621, 622].includes(weatherID)) {
          currentIcon = "SNOW_SHOWERS_DAY"
        } else if ([615, 616].includes(weatherID)) {
          currentIcon = "RAIN_SNOW_SHOWERS_DAY";
        } else if ([611, 612, 613].includes(weatherID)) {
          currentIcon = "RAIN_SNOW";
        } else {
          currentIcon = "SNOW";
        }
        break;

      case "11d"://雷
        if ([200, 230].includes(weatherID)) {
          currentIcon = "THUNDER_SHOWERS_DAY";
        } else if ([210, 211, 212, 221].includes(weatherID)) {
          currentIcon = "THUNDER";
        } else {
          currentIcon = "THUNDER_RAIN";
        }
        break;

      case "50d"://その他（霧、竜巻など）
        currentIcon = "FOG";
        break;
    }
  } else {//午後
    switch (icon) {
      case "01n"://晴れ
        currentIcon = "CLEAR_NIGHT";
        break;

      case "02n"://晴れ
        currentIcon = "PARTLY_CLOUDY_DAY";
        break;

      case "03n"://晴れ
        currentIcon = "PARTLY_CLOUDY_DAY";
        break;

      case "04n"://曇り
        if (weatherID === 804) {
          currentIcon = "CLOUDY";
        } else {
          currentIcon = "PARTLY_CLOUDY_NIGHT";
        }
        break;

      case "09n"://雨
        if ([520, 521, 522, 531].includes(weatherID)) {
          currentIcon = "SHOWERS_NIGHT";
        } else {
          currentIcon = "SLEET";
        }
        break;

      case "10n"://雨
        currentIcon = "RAIN";
        break;

      case "13n"://雪
        if ([620, 621, 622].includes(weatherID)) {
          currentIcon = "SNOW_SHOWERS_NIGHT"
        } else if ([615, 616].includes(weatherID)) {
          currentIcon = "RAIN_SNOW_SHOWERS_NIGHT";
        } else if ([611, 612, 613].includes(weatherID)) {
          currentIcon = "RAIN_SNOW";
        } else {
          currentIcon = "SNOW";
        }
        break;

      case "11n"://雷
        if ([200, 230].includes(weatherID)) {
          currentIcon = "THUNDER_SHOWERS_NIGHT";
        } else if ([210, 211, 212, 221].includes(weatherID)) {
          currentIcon = "THUNDER";
        } else {
          currentIcon = "THUNDER_RAIN";
        }
        break;

      case "50n"://その他（霧、竜巻など）
        currentIcon = "FOG";
        break;
    }
  }
  //skyconsのインスタンス生成時に「colorは白です」の指定（JSONで記述）
  const skycons = new Skycons({ color: "white" });
  skycons.play();
  skycons.set(element, Skycons[currentIcon]);


  /**
   * 🌟疑問点３点
   * ・skyconsのconstructorの引数　キーバリュー(Map的なもの)で格納？
   * ・skyconsの処理内容ふぁー
   * ・playやsetをキーとして関数を実行している？skyconsにて
   * ・playやsetはそれぞれ何を行っている関数？this=Skycons変数？
   * 
   * ➡ライブラリの処理は「これを書けばこの結果になる」程度でもいい。サイトにもそう書いてあることが主。
   * ※講師の方に聞く
   */
}






/**以下よりセ氏⇔カ氏で変換するイベント処理 */





//現在の気温をクリックすると、セ氏⇔カ氏で相互変換が可能
elementNowTemperatureDegree.addEventListener("click", () => {
  //parseFloatは文字列を浮動小数点型に変える
  //textContentは、テキストを文字列で取得する
  let nowTemperatureDegree = parseFloat(elementNowTemperatureDegree.textContent);
  let maxTemperatureDegree = parseFloat(elementMaxTemperatureDegree.textContent);
  let minTemperatureDegree = parseFloat(elementMinTemperatureDegree.textContent);
  let unit = elementNowTemperatureUnit.textContent;
  if (unit === "℃") {//セ氏　→　カ氏
    //渡された変数を受け取り、Cと呼ばれる変数に格納。その後1.8を掛けて32を加えてカ氏に変換する
    elementNowTemperatureDegree.textContent = convertCToF(nowTemperatureDegree);
    elementNowTemperatureUnit.textContent = "℉";
    elementMaxTemperatureDegree.textContent = convertCToF(maxTemperatureDegree);
    elementMaxTemperatureUnit.textContent = "℉";
    elementMinTemperatureDegree.textContent = convertCToF(minTemperatureDegree);
    elementMinTemperatureUnit.textContent = "℉";
  } else {//カ氏　→セ氏
    //渡された値から32を引いて1.8で割って、セ氏に変更する
    elementNowTemperatureDegree.textContent = convertFToC(nowTemperatureDegree);
    elementNowTemperatureUnit.textContent = "℃";
    elementMaxTemperatureDegree.textContent = convertFToC(maxTemperatureDegree);
    elementMaxTemperatureUnit.textContent = "℃";
    elementMinTemperatureDegree.textContent = convertFToC(minTemperatureDegree);
    elementMinTemperatureUnit.textContent = "℃";
  }
})



//セ氏をカ氏に変換
function convertCToF(data) {
  return Math.round((data * 1.8 + 32) * 100) / 100;
}

//カ氏をセ氏に変換
function convertFToC(data) {
  return Math.round(((data - 32) / 1.8) * 100) / 100;
}






