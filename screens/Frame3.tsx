import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.frameChild, styles.framePosition]} />
      <Text
        style={[styles.thousandsOfPeopleContainer, styles.containerPosition]}
      >
        <Text
          style={styles.thousandsOfPeople}
        >{`Thousands of people trust `}</Text>
        <Text style={styles.wiseTypo}>Wise</Text>
        <Text style={styles.thousandsOfPeople}>{` to buy crypto, grow 
their passive income, borrow funds and spend with rewards on every purchase.`}</Text>
      </Text>
      <Text style={[styles.theWiseChoiceContainer, styles.containerPosition]}>
        <Text style={styles.wiseTypo}>{`The `}</Text>
        <Text style={styles.wise1Typo}>Wise</Text>
        <Text style={styles.wiseTypo}> choice for your digital assets</Text>
      </Text>
      <View style={styles.newAccountParent}>
        <Text style={[styles.newAccount, styles.emailTypo]}>New Account?</Text>
        <Text style={[styles.forgotPassword, styles.emailTypo]}>
          Forgot Password?
        </Text>
      </View>
      <View style={[styles.frameWrapper, styles.framePosition]}>
        <View style={styles.walletParent}>
          <View style={styles.wallet}>
            <View style={styles.walletPosition} />
            <Image
              style={[styles.walletIcon, styles.walletIconPosition]}
              contentFit="cover"
              source={require("../assets/wallet.png")}
            />
            <View style={styles.text}>
              <Text style={[styles.wallet1, styles.walletLayout]}>Rainbow</Text>
              <Text
                style={[styles.recent, styles.recentTypo]}
                numberOfLines={1}
              />
            </View>
          </View>
          <View style={styles.wallet}>
            <View style={styles.walletPosition} />
            <Image
              style={[styles.walletIcon1, styles.walletIconPosition]}
              contentFit="cover"
              source={require("../assets/wallet1.png")}
            />
            <View style={styles.text}>
              <Text style={[styles.wallet1, styles.walletLayout]}>
                Meta mask
              </Text>
              <Text
                style={[styles.recent, styles.recentTypo]}
                numberOfLines={1}
              />
            </View>
          </View>
          <View style={styles.wallet}>
            <View style={styles.walletPosition} />
            <Image
              style={[styles.walletIcon1, styles.walletIconPosition]}
              contentFit="cover"
              source={require("../assets/wallet2.png")}
            />
            <View style={styles.text}>
              <Text style={[styles.wallet1, styles.walletLayout]}>
                Coinbase
              </Text>
              <Text
                style={[styles.recent2, styles.recentTypo]}
                numberOfLines={1}
              >
                Recent
              </Text>
            </View>
          </View>
          <View style={styles.wallet}>
            <View style={styles.walletPosition} />
            <Image
              style={[styles.walletIcon1, styles.walletIconPosition]}
              contentFit="cover"
              source={require("../assets/wallet3.png")}
            />
            <View style={styles.text}>
              <Text
                style={[styles.wallet7, styles.recentTypo]}
                numberOfLines={1}
              >
                WalletConnect
              </Text>
              <Text
                style={[styles.recent2, styles.recentTypo]}
                numberOfLines={1}
              >
                Recent
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <View style={styles.eaInputBox} />
        <Text style={[styles.emailAddress, styles.emailTypo]}>
          Email Address
        </Text>
        <Text style={[styles.enterAnEmail, styles.eyeIconPosition]}>
          Enter an email
        </Text>
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout1]}>
        <View style={styles.eaInputBox} />
        <Text style={[styles.emailAddress, styles.emailTypo]}>Password</Text>
        <Text style={[styles.enterAnEmail, styles.eyeIconPosition]}>
          Enter a password
        </Text>
        <Image
          style={[styles.eyeIcon, styles.eyeIconPosition]}
          contentFit="cover"
          source={require("../assets/eye1.png")}
        />
      </View>
      <View style={[styles.eaInputBoxContainer, styles.inputLayout]}>
        <Image
          style={[styles.eaInputBox2, styles.inputLayout]}
          contentFit="cover"
          source={require("../assets/ea-input-box1.png")}
        />
        <Text style={[styles.login, styles.emailTypo]}>Login</Text>
      </View>
      <Image
        style={styles.g870Icon}
        contentFit="cover"
        source={require("../assets/g870.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    width: 347,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: 22,
    position: "absolute",
  },
  emailTypo: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  walletIconPosition: {
    zIndex: 1,
    marginTop: 8,
    height: 60,
    width: 60,
  },
  walletLayout: {
    width: 84,
    color: Color.lightModalText,
    display: "flex",
  },
  recentTypo: {
    height: 18,
    overflow: "hidden",
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  inputLayout1: {
    height: 72,
    width: 350,
    left: 18,
    position: "absolute",
  },
  eyeIconPosition: {
    top: 44,
    position: "absolute",
  },
  inputLayout: {
    height: 44,
    width: 350,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
    top: 0,
    height: 844,
  },
  thousandsOfPeople: {
    fontFamily: FontFamily.interRegular,
  },
  wiseTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  thousandsOfPeopleContainer: {
    top: 288,
    height: 58,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: 22,
  },
  wise1Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  theWiseChoiceContainer: {
    top: 254,
    fontSize: FontSize.size_lg,
    height: 22,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: 22,
  },
  newAccount: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  forgotPassword: {
    marginLeft: 40,
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  newAccountParent: {
    top: 649,
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    width: 386,
    height: 52,
    padding: Padding.p_base,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  walletPosition: {
    zIndex: 0,
    height: 60,
    width: 60,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    left: "50%",
    marginLeft: -30,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  walletIcon: {
    marginTop: 8,
    borderRadius: Border.br_xs,
    zIndex: 1,
  },
  wallet1: {
    fontFamily: FontFamily.dMSansBold,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: 1,
    width: 84,
    color: Color.lightModalText,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  recent: {
    color: Color.lightAccentBlue,
    height: 18,
    alignSelf: "stretch",
    display: "flex",
  },
  text: {
    zIndex: 2,
    marginTop: 8,
  },
  wallet: {
    alignItems: "center",
  },
  walletIcon1: {
    borderRadius: 26,
    marginTop: 8,
  },
  recent2: {
    display: "none",
    color: Color.lightAccentBlue,
    height: 18,
    alignSelf: "stretch",
  },
  wallet7: {
    width: 84,
    color: Color.lightModalText,
    display: "flex",
  },
  walletParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    padding: Padding.p_base,
    flexDirection: "row",
  },
  frameWrapper: {
    top: 685,
    height: 149,
    paddingTop: 30,
  },
  eaInputBox: {
    top: 32,
    borderRadius: Border.br_10xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    height: 40,
    width: 350,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  emailAddress: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  enterAnEmail: {
    left: 13,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray_600,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  eaInputBoxParent: {
    top: 385,
  },
  eyeIcon: {
    left: 325,
    width: 17,
    height: 17,
  },
  eaInputBoxGroup: {
    top: 479,
  },
  eaInputBox2: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  login: {
    top: 13,
    left: 158,
    color: Color.colorWhite,
    width: 38,
    height: 19,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  eaInputBoxContainer: {
    top: 587,
    left: 18,
    height: 44,
  },
  g870Icon: {
    height: "17.77%",
    width: "38.46%",
    top: "7.7%",
    right: "30.77%",
    bottom: "74.53%",
    left: "30.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Frame3;
