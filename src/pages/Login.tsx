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
import React from "react";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="login-system">
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
                <br />

                <div className="login-text-wrapper">
                  <img
                    src="./Good afternoon 🌅.png"
                    alt=""
                    style={{ height: "27px", width: "187px" }}
                  />
                  <h6
                    style={{
                      fontSize: "17px",
                      color: "#324054",
                      fontWeight: "100",
                    }}
                  >
                    Enter your login credentials
                  </h6>
                </div>

                <form action="" className="form">
                  <div className="input-text">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      Email/User ID
                    </h4>
                    <IonInput
                      className="text-input ion-border-radius"
                      fill="outline"
                      type="text"
                      style={{ width: "80%" }}
                    ></IonInput>
                  </div>
                  <div className="password-details">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      Password
                    </h4>
                    <IonInput
                      className="text-input"
                      fill="outline"
                      type="password"
                      style={{ width: "80%" }}
                    ></IonInput>
                  </div>
                  <div className="forgot-password">
                    <IonToolbar style={{ width: "80%" }}>
                      <IonRouterLink
                        routerLink="/forgot+password"
                        style={{ fontSize: "15px", color: "#552BCC" }}
                        slot="end"
                      >
                        Forgot Password?
                      </IonRouterLink>
                    </IonToolbar>
                  </div>
                  <IonButton
                    color={"tertiary"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                  >
                    Login
                  </IonButton>
                  <div className="new-user">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      Don't have an account?{" "}
                      <IonRouterLink
                        routerLink="/"
                        style={{ fontSize: "15px", color: "#552BCC" }}
                      >
                        Sign Up
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

export default Login;
