import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonInput,
  IonRouterLink,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import {
  logoGithub,
  logInOutline,
  arrowBackSharp,
  chevronBack,
  checkboxOutline,
} from "ionicons/icons";

const NewPassword: React.FC = () => {
  const [password, setPassword] = useState("telephone");

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <div className="login-system new-password">
          <div className="login-wrapper">
            <div className="login-image">
              <img src="./Rectangle 34.jpg" alt="" className="image-name" />
              <div className="login-text">
                <p>
                  If you want to deliver positively outrageous service, keeping
                  your customers connected to you is critical. Your ability to
                  engage, guide and satisfy your customers is integral to your
                  success as a leader. Great service starts with how you build
                  relationships and earn trust - that’s the basis of gaining and
                  maintaining successful connections with your customers.
                </p>
                <div className="google">
                  <img src="./image 6.png" alt="" />
                </div>
              </div>
            </div>
            <div className="login-form">
              <div className="login-info">
                <div className="login-info-image">
                  <img src="./Ellipse 3.png" alt="" />
                </div>

                <div className="login-text-wrapper">
                  <h2>Create new password</h2>

                  <h6
                    style={{
                      fontSize: "15px",
                      color: "#324054",
                      fontWeight: "100",
                    }}
                  >
                    Almost done, enter your new password & you are set.
                  </h6>
                </div>

                <form action="" className="form">
                  <div className="input-text">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      New Password
                    </h4>
                    <IonInput
                      className="text-input ion-border-radius"
                      fill="outline"
                      type="password"
                      style={{ width: "80%" }}
                      value={password}
                    ></IonInput>
                  </div>
                  <div className="password-details">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      Confirm New Password
                    </h4>
                    <IonInput
                      className="text-input"
                      fill="outline"
                      type="password"
                      style={{ width: "80%" }}
                      value={password}
                      onIonChange={(e: any) => e.target.value}
                    ></IonInput>
                  </div>
                  <div className="password-strength">
                    <div className="col-1">
                      <div className="items">
                        <img src="./✅.png" alt="" />

                        <h6 style={{fontSize:'.8rem'}}>1 lowercase character</h6>
                      </div>
                      <div className="items">
                        <img src="./✅.png" alt="" />

                        <h6 style={{fontSize:'.8rem'}}>1 uppercase character</h6>
                      </div>
                      <div className="items">
                        <img src="./✅.png" alt="" />

                        <h6 style={{fontSize:'.8rem'}}>1 numeric digit</h6>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="items">
                        <img src="./✅.png" alt="" />

                        <h6 style={{fontSize:'.8rem'}}>1 special character</h6>
                      </div>
                      <div className="items">
                        <img src="./✅.png" alt="" />

                        <h6 style={{fontSize:'.8rem'}}>8 characters minimum </h6>
                      </div>
                    </div>
                  </div>

                  <IonButton
                    color={"tertiary"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                  >
                    Password Reset
                  </IonButton>
                  <div className="new-user">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      <IonRouterLink
                        routerLink="/"
                        style={{
                          fontSize: "15px",
                          color: "#324054",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className="back-text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "1rem",
                          }}
                        >
                          <img src="./___ Back to Login.png" alt="" />
                        </div>
                      </IonRouterLink>
                    </h4>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewPassword;

// import React, { useState } from 'react';

// const PasswordStrengthCheck = () => {
//   const [password, setPassword] = useState('');

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const isStrongPassword = (password) => {
//     // Define your password criteria here
//     const minLength = 8;
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasLowercase = /[a-z]/.test(password);
//     const hasNumber = /\d/.test(password);

//     return password.length >= minLength && hasUppercase && hasLowercase && hasNumber;
//   };

//   const getPasswordStrengthClass = () => {
//     if (password === '') {
//       return 'neutral';
//     }

//     return isStrongPassword(password) ? 'strong' : 'weak';
//   };

//   return (
//     <div>
//       <input
//         type="password"
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <div className={`password-strength ${getPasswordStrengthClass()}`}>
//         {password === '' ? 'Enter a password' : 'Password Strength'}
//       </div>
//     </div>
//   );
// };

// export default PasswordStrengthCheck;
