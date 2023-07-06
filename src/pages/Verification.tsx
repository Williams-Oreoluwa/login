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
const Verication: React.FC = () => {
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
                  <h2>Check your email</h2>

                  <h6
                    style={{
                      fontSize: "15px",
                      color: "#324054",
                      fontWeight: "100",
                    }}
                  >
                    We sent an email to james@ubagroup.com with <br />
                    instructions on how to reset password.
                  </h6>

                  <IonRouterLink
                    routerLink="/"
                    style={{ fontSize: "15px", color: "#552BCC" }}
                  >
                    Change email address
                  </IonRouterLink>
                </div>

                <form action="" style={{ display: "grid", gap: "1.3rem" }}>
                  <IonButton
                    color={"light"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                    routerLink="/new+password"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        gap: "1rem",
                      }}
                    >
                      <img src="./image 7.png" alt="" />
                      Open Gmail
                    </div>
                  </IonButton>
                  <IonButton
                    color={"light"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                    routerLink="/new+password"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        gap: "1rem",
                      }}
                    >
                      <img src="./image 9.png" alt="" />
                      Open Email app
                    </div>
                  </IonButton>
                  <IonButton
                    color={"light"}
                    className="ion-margin-top"
                    style={{ textTransform: "none", width: "80%" }}
                    routerLink="/new+password"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem",
                        gap: "1rem",
                      }}
                    >
                      <img src="./image 8.png" alt="" />
                      Open Outlook
                    </div>
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

export default Verication;
