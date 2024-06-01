import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const CreditTransactionVariation = () => {
  return (
    <View style={styles.creditTransactionVariation}>
      <View style={styles.eaInputBox} />
      <View
        style={[
          styles.creditTransactionVariationChild,
          styles.creditTransactionVariationChildLayout,
        ]}
      />
      <View style={styles.transactionParent}>
        <View style={[styles.transaction, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>3.01 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+3.99 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123456123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-40.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Wallet transfer
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>4001.00 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-4,000.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Employee payout
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>2.01 ETH</Text>
              <Text style={[styles.text, styles.textTypo]}>
                4221213****123456123
              </Text>
              <Text style={[styles.usd1, styles.usdTypo]}>-6400.00 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Money transfer
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>0.67 BTC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40,560.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Automated top-up
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>39.99 USDC</Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
              <Text style={[styles.text, styles.textTypo]}>
                233132****123123123
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Automated top up
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transaction1, styles.transactionLayout]}>
          <View style={styles.ethLogoParent}>
            <Image
              style={styles.ethLogoIcon}
              contentFit="cover"
              source={require("../assets/eth-logo1.png")}
            />
            <View style={styles.moneyTransferParent}>
              <Text style={[styles.moneyTransfer, styles.textLayout]}>
                Crypto transfer-out
              </Text>
              <Text style={[styles.usdc, styles.usdTypo1]}>39.99 USDC</Text>
              <Text style={[styles.text, styles.textTypo]}>
                1221213****123123123
              </Text>
              <Text style={[styles.usd, styles.usdTypo]}>+40.59 USD →</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.transactions, styles.textTypo]}>Transactions</Text>
      <Text style={styles.availableToEarn}>Available to earn interest</Text>
      <View
        style={[
          styles.yxldhnzg400x400RemovebgPrevParent,
          styles.yxldhnzg400x400Layout,
        ]}
      >
        <Image
          style={[
            styles.yxldhnzg400x400RemovebgPrevIcon,
            styles.yxldhnzg400x400Layout,
          ]}
          contentFit="cover"
          source={require("../assets/yxldhnzg-400x400removebgpreview-9.png")}
        />
        <Image
          style={[styles.image1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Image
          style={[styles.image2Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-21.png")}
        />
      </View>
      <Image
        style={[styles.image3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-31.png")}
      />
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
        <View style={styles.homeParent}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill1.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
            <View style={[styles.darhboardChild, styles.darhboardLayout]} />
            <View style={[styles.darhboardItem, styles.darhboardPosition]} />
            <View style={[styles.darhboardInner, styles.rectangleViewLayout]} />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
          </View>
          <Text style={[styles.farms, styles.homeTypo]}>Farms</Text>
        </View>
        <View style={[styles.exchangeParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Exchange</Text>
          <Image
            style={[styles.refresh2Icon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.groupFillIcon, styles.fillIconLayout]}
            contentFit="cover"
            source={require("../assets/group-fill1.png")}
          />
          <Text style={[styles.business, styles.homeTypo]}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={[styles.userFillIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/user-fill.png")}
          />
        </View>
      </View>
      <View style={styles.eyeParent}>
        <Image
          style={styles.eyeIcon}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.text8, styles.usdTypo]}>$23,000.06</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-111.png")}
        />
        <Text style={[styles.creditBalance, styles.textTypo]}>
          Credit Balance
        </Text>
      </View>
      <View style={[styles.eaInputBoxParent, styles.inputLayout1]}>
        <View style={[styles.eaInputBox1, styles.inputPosition]} />
        <Text style={[styles.deposit, styles.depositTypo]}>Deposit</Text>
        <Image
          style={[styles.downloadIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/download2.png")}
        />
      </View>
      <View style={[styles.eaInputBoxGroup, styles.inputLayout]}>
        <View style={[styles.eaInputBox2, styles.inputLayout]} />
        <Text style={[styles.transfer, styles.depositTypo]}>Transfer</Text>
        <Image
          style={[styles.twoWayArrowIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/twoway-arrow.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  creditTransactionVariationChildLayout: {
    width: 390,
    left: 0,
  },
  transactionLayout: {
    width: 341,
    height: 36,
  },
  textLayout: {
    width: 145,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  usdTypo1: {
    width: 141,
    textAlign: "right",
    left: 147,
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  usdTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  yxldhnzg400x400Layout: {
    height: 62,
    position: "absolute",
  },
  iconPosition: {
    height: 44,
    top: 9,
    position: "absolute",
  },
  iconLayout1: {
    height: 33,
    position: "absolute",
  },
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboardPosition: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleViewLayout: {
    left: "55.43%",
    right: "13.71%",
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  inputLayout1: {
    width: 164,
    height: 58,
    position: "absolute",
  },
  inputPosition: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  depositTypo: {
    height: 17,
    width: 53,
    color: Color.colorRoyalblue_100,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    width: 25,
    position: "absolute",
  },
  inputLayout: {
    width: 167,
    height: 58,
    position: "absolute",
  },
  eaInputBox: {
    top: 431,
    left: 63,
    borderColor: Color.colorDarkgray_600,
    borderWidth: 1,
    width: 161,
    height: 93,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  creditTransactionVariationChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    width: 390,
    position: "absolute",
    height: 844,
  },
  ethLogoIcon: {
    width: 36,
    overflow: "hidden",
    height: 36,
  },
  moneyTransfer: {
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 21,
    position: "absolute",
  },
  usdc: {
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 21,
    position: "absolute",
  },
  text: {
    width: 145,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  usd: {
    color: Color.colorSeagreen,
    width: 141,
    textAlign: "right",
    left: 147,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  moneyTransferParent: {
    width: 288,
    marginLeft: 17,
    height: 36,
  },
  ethLogoParent: {
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  transaction: {
    height: 36,
  },
  usd1: {
    color: Color.colorRed,
    width: 141,
    textAlign: "right",
    left: 147,
    fontSize: FontSize.size_xs,
    top: 0,
  },
  transaction1: {
    marginTop: 20,
    height: 36,
  },
  transactionParent: {
    top: 340,
    left: 24,
    position: "absolute",
  },
  transactions: {
    top: 291,
    fontSize: FontSize.size_xl,
    left: 24,
  },
  availableToEarn: {
    top: 167,
    width: 201,
    left: 25,
    textAlign: "left",
    color: Color.colorDimgray_400,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    left: 165,
    width: 58,
    top: 0,
  },
  image1Icon: {
    width: 48,
    left: 0,
  },
  image2Icon: {
    left: 291,
    width: 99,
  },
  yxldhnzg400x400RemovebgPrevParent: {
    top: 31,
    width: 390,
    left: 0,
  },
  image3Icon: {
    top: 130,
    left: 22,
    width: 32,
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
  },
  homeFillIcon: {
    left: 0,
  },
  homeParent: {
    top: 19,
    height: 50,
    width: 35,
    left: 24,
    position: "absolute",
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
    borderStyle: "solid",
    position: "absolute",
  },
  darhboardInner: {
    bottom: "13.71%",
    top: "55.43%",
  },
  rectangleView: {
    bottom: "55.43%",
    top: "13.71%",
  },
  farms: {
    top: 33,
  },
  darhboardParent: {
    left: 96,
    width: 35,
  },
  refresh2Icon: {
    left: 10,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  groupFillIcon: {
    left: 8,
  },
  business: {
    top: 34,
  },
  groupFillParent: {
    top: 20,
    left: 246,
    width: 50,
    height: 49,
    position: "absolute",
  },
  userFillIcon: {
    left: 6,
    width: 35,
    top: 0,
  },
  accountParent: {
    left: 319,
    width: 47,
  },
  homeRow: {
    top: 757,
  },
  eyeIcon: {
    top: 1,
    left: 100,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text8: {
    top: 24,
    left: 29,
    fontSize: FontSize.size_9xl,
    color: Color.colorDodgerblue_100,
    textAlign: "left",
  },
  groupChild: {
    height: "27.59%",
    width: "2.99%",
    top: "56.9%",
    right: "0%",
    bottom: "15.52%",
    left: "97.01%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  creditBalance: {
    fontSize: FontSize.size_xs,
    color: Color.colorDimgray_300,
    left: 0,
    top: 0,
  },
  eyeParent: {
    top: 106,
    height: 58,
    width: 201,
    left: 25,
    position: "absolute",
  },
  eaInputBox1: {
    width: 164,
    height: 58,
    position: "absolute",
  },
  deposit: {
    left: 56,
    top: 34,
  },
  downloadIcon: {
    top: 7,
    left: 70,
    height: 22,
  },
  eaInputBoxParent: {
    top: 208,
    left: 25,
    width: 164,
  },
  eaInputBox2: {
    backgroundColor: Color.colorGhostwhite,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  transfer: {
    left: 57,
    top: 35,
  },
  twoWayArrowIcon: {
    top: 11,
    left: 73,
    height: 18,
  },
  eaInputBoxGroup: {
    left: 199,
    top: 208,
  },
  creditTransactionVariation: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default CreditTransactionVariation;
