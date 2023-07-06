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
import {
  logoGithub,
  logInOutline,
  arrowBackSharp,
  chevronBack,
  checkbox,
} from "ionicons/icons";

const ForgotPassword: React.FC = () => {
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
                  <h2
                    style={{
                      fontSize: "33px",
                      color: "#324054",
                      fontWeight: "600",
                    }}
                  >
                    Forgot Password
                  </h2>

                  <h6
                    style={{
                      fontSize: "14px",
                      color: "#324054",
                      fontWeight: "100",
                    }}
                  >
                    No worries, we would send your reset instructions
                  </h6>
                </div>

                <form action="" className="form">
                  <div className="input-text">
                    <h4 style={{ fontSize: "15px", color: "#324054" }}>
                      Email
                    </h4>
                    <IonInput
                      className="text-input ion-border-radius"
                      fill="outline"
                      type="text"
                      style={{ width: "80%" }}
                      placeholder="james@ubagroup.com"
                    ></IonInput>
                  </div>

                  <IonButton
                    color={"tertiary"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                    routerLink="/verification"
                  >
                    Reset Password
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

export default ForgotPassword;
