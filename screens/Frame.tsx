import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frame, styles.frameLayout11]}>
        <View style={[styles.image1Parent, styles.frame1Position]}>
          <Image
            style={[styles.image1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
          <View style={[styles.frame1, styles.frame1Position]}>
            <Image
              style={[styles.image2Icon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/image-21.png")}
            />
            <Image
              style={[
                styles.yxldhnzg400x400RemovebgPrevIcon,
                styles.frame28Layout,
              ]}
              contentFit="cover"
              source={require("../assets/yxldhnzg-400x400removebgpreview-9.png")}
            />
          </View>
        </View>
        <View style={[styles.frame2, styles.frameLayout10]}>
          <View style={[styles.frameGroup, styles.frameLayout10]}>
            <View style={[styles.frame3, styles.frameLayout9]}>
              <View style={[styles.frame4, styles.frameLayout9]}>
                <Image
                  style={styles.eyeIcon}
                  contentFit="cover"
                  source={require("../assets/eye.png")}
                />
                <Text style={[styles.businessBalance, styles.textFlexBox]}>
                  Business Balance
                </Text>
              </View>
            </View>
            <View style={[styles.frame5, styles.frameLayout8]}>
              <View style={[styles.hParent, styles.frame6Position]}>
                <Text style={styles.h}>24H</Text>
                <View style={[styles.frame6, styles.frame6Position]}>
                  <Image
                    style={styles.arrowDropUpIcon}
                    contentFit="cover"
                    source={require("../assets/arrow-drop-up1.png")}
                  />
                  <Text style={[styles.text, styles.textFlexBox]}>5.63%</Text>
                </View>
              </View>
              <View style={[styles.frame7, styles.frameLayout7]}>
                <View style={[styles.frame8, styles.frame8Position]}>
                  <Text style={[styles.text1, styles.textFlexBox]}>
                    $21,524.12
                  </Text>
                  <Image
                    style={[styles.frameChild, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/vector-11.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frame9, styles.frameLayout11]}>
        <View style={[styles.frame10, styles.frameLayout6]}>
          <View style={styles.frame11}>
            <View style={[styles.forPayeesParent, styles.userFillIconLayout]}>
              <Text style={[styles.forPayees, styles.forPayeesTypo]}>
                For Payees
              </Text>
              <View style={[styles.frame12, styles.frameLayout5]}>
                <Image
                  style={[styles.frameItem, styles.frameLayout5]}
                  contentFit="cover"
                  source={require("../assets/rectangle-30.png")}
                />
                <Text style={[styles.forPayers, styles.forPayersTypo]}>
                  For Payers
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame13, styles.frameLayout6]}>
            <View style={[styles.frame14, styles.frameLayout4]}>
              <View style={[styles.frame15, styles.frameLayout4]}>
                <View style={[styles.frame16, styles.frameBorder]}>
                  <Text style={[styles.monthly, styles.usdcTypo]}>Monthly</Text>
                  <Image
                    style={[styles.chevronIcon, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/chevron.png")}
                  />
                </View>
                <View style={[styles.frame17, styles.framePosition3]}>
                  <View style={[styles.frame18, styles.frameLayout3]}>
                    <Image
                      style={[styles.image13Icon, styles.frameLayout3]}
                      contentFit="cover"
                      source={require("../assets/image-13.png")}
                    />
                  </View>
                  <View style={styles.framePosition3}>
                    <View style={[styles.frame19, styles.framePosition2]}>
                      <Text
                        style={[styles.enterAnAmount, styles.forPayeesTypo]}
                      >{`Enter an amount & frequency`}</Text>
                    </View>
                    <View style={[styles.frame20, styles.frameBorder]}>
                      <Text style={[styles.enterAmount, styles.usdcTypo]}>
                        Enter amount
                      </Text>
                      <Text style={[styles.usdc, styles.usdcTypo]}>USDC</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frame21, styles.framePosition1]}>
              <View style={[styles.frameView, styles.framePosition1]}>
                <View style={[styles.frame22, styles.framePosition2]}>
                  <Text style={[styles.enterAnAmount, styles.forPayeesTypo]}>
                    Input Payee Information
                  </Text>
                </View>
                <View style={[styles.frame23, styles.framePosition4]}>
                  <View style={[styles.frame24, styles.frameBorder]}>
                    <Text style={[styles.enterJobTitle, styles.usdcTypo]}>
                      Enter job title
                    </Text>
                  </View>
                  <View style={[styles.frame25, styles.inputPosition]}>
                    <Text style={[styles.enterEmployeeName, styles.usdcTypo]}>
                      Enter employee name
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame26, styles.frameLayout11]}>
          <View style={[styles.homeRow, styles.frameLayout2]}>
            <View style={[styles.frame27, styles.frameLayout2]}>
              <Image
                style={[styles.frameInner, styles.frameLayout2]}
                contentFit="cover"
                source={require("../assets/rectangle-390.png")}
              />
              <View style={styles.frameParent1}>
                <View style={[styles.frame28, styles.farmsPosition]}>
                  <Text style={[styles.home, styles.usdcTypo]}>Home</Text>
                </View>
                <Image
                  style={[styles.homeFillIcon, styles.fillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/home-fill.png")}
                />
              </View>
            </View>
            <View style={[styles.frame29, styles.frame29Layout]}>
              <View style={[styles.darhboardParent, styles.parentPosition]}>
                <View style={[styles.homeFillIcon, styles.fillIconLayout]}>
                  <View
                    style={[styles.darhboardChild, styles.darhboardLayout]}
                  />
                  <View
                    style={[styles.darhboardItem, styles.darhboardPosition]}
                  />
                  <View
                    style={[styles.darhboardInner, styles.rectangleViewLayout]}
                  />
                  <View
                    style={[styles.rectangleView, styles.rectangleViewLayout]}
                  />
                </View>
                <Text style={[styles.farms, styles.farmsPosition]}>Farms</Text>
              </View>
              <View style={[styles.exchangeParent, styles.parentPosition]}>
                <Text style={[styles.farms, styles.farmsPosition]}>
                  Exchange
                </Text>
                <Image
                  style={[styles.refresh2Icon, styles.text2Position]}
                  contentFit="cover"
                  source={require("../assets/refresh-21.png")}
                />
              </View>
              <View style={[styles.frameParent2, styles.frameLayout1]}>
                <View style={[styles.frame30, styles.frameLayout1]} />
                <Text style={[styles.account, styles.usdcTypo]}>Account</Text>
                <Image
                  style={[styles.userFillIcon, styles.userFillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/user-fill.png")}
                />
              </View>
              <View style={[styles.groupFillParent, styles.frame29Layout]}>
                <Image
                  style={[styles.groupFillIcon, styles.fillIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-fill1.png")}
                />
                <Text style={[styles.business, styles.farmsPosition]}>
                  Business
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame31, styles.framePosition]}>
            <View style={[styles.frame32, styles.frameLayout4]}>
              <View style={[styles.frame33, styles.frameLayout]}>
                <View style={[styles.frame34, styles.frameLayout3]}>
                  <Image
                    style={[styles.image13Icon, styles.frameLayout3]}
                    contentFit="cover"
                    source={require("../assets/image-13.png")}
                  />
                </View>
                <View style={[styles.frameParent3, styles.frameLayout]}>
                  <View style={[styles.frame35, styles.framePosition2]}>
                    <Text style={[styles.enterAnAmount, styles.forPayeesTypo]}>
                      Start Streaming!
                    </Text>
                  </View>
                  <View style={[styles.frame36, styles.frameBorder]}>
                    <Text style={[styles.text2, styles.text2Position]}>
                      2000 / 4000
                    </Text>
                    <Text style={[styles.usdc1, styles.usdcTypo]}>USDC</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frame37, styles.framePosition]}>
              <View style={[styles.eaInputBoxParent, styles.inputPosition]}>
                <Image
                  style={[styles.eaInputBox, styles.inputPosition]}
                  contentFit="cover"
                  source={require("../assets/ea-input-box.png")}
                />
                <Text style={[styles.startHere, styles.forPayersTypo]}>
                  Start Here!
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout11: {
    width: 390,
    left: 0,
  },
  frame1Position: {
    height: 62,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    top: 9,
    height: 44,
    position: "absolute",
  },
  frame28Layout: {
    width: 58,
    left: 0,
  },
  frameLayout10: {
    height: 88,
    position: "absolute",
  },
  frameLayout9: {
    height: 15,
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    top: 0,
  },
  frameLayout8: {
    height: 64,
    overflow: "hidden",
  },
  frame6Position: {
    height: 26,
    left: 0,
    position: "absolute",
  },
  frameLayout7: {
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  frame8Position: {
    left: 6,
    top: 0,
  },
  frameChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout6: {
    width: 366,
    left: 0,
  },
  userFillIconLayout: {
    height: 33,
    position: "absolute",
  },
  forPayeesTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameLayout5: {
    height: 29,
    width: 150,
    position: "absolute",
  },
  forPayersTypo: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frameLayout4: {
    height: 72,
    overflow: "hidden",
    position: "absolute",
  },
  frameBorder: {
    height: 40,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  usdcTypo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
  },
  framePosition3: {
    width: 230,
    height: 72,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameLayout3: {
    width: 23,
    position: "absolute",
  },
  framePosition2: {
    height: 17,
    top: 0,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  framePosition1: {
    height: 125,
    top: 0,
    position: "absolute",
  },
  framePosition4: {
    top: 32,
    position: "absolute",
  },
  inputPosition: {
    width: 335,
    top: 0,
    position: "absolute",
  },
  frameLayout2: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  farmsPosition: {
    top: 35,
    position: "absolute",
  },
  fillIconLayout: {
    height: 35,
    width: 35,
    top: 0,
  },
  frame29Layout: {
    height: 49,
    position: "absolute",
  },
  parentPosition: {
    height: 48,
    top: 1,
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
  text2Position: {
    left: 10,
    position: "absolute",
  },
  frameLayout1: {
    width: 47,
    height: 48,
    position: "absolute",
  },
  framePosition: {
    width: 362,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  frameLayout: {
    width: 328,
    height: 72,
    top: 0,
    position: "absolute",
  },
  image1Icon: {
    width: 48,
    height: 44,
    left: 0,
  },
  image2Icon: {
    left: 126,
    width: 99,
    height: 44,
  },
  yxldhnzg400x400RemovebgPrevIcon: {
    height: 62,
    top: 0,
    position: "absolute",
  },
  frame1: {
    left: 165,
    width: 225,
    overflow: "hidden",
  },
  image1Parent: {
    width: 390,
    left: 0,
  },
  eyeIcon: {
    left: 88,
    width: 13,
    height: 13,
    top: 1,
    position: "absolute",
  },
  businessBalance: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  frame4: {
    width: 101,
    left: 27,
    top: 0,
    position: "absolute",
  },
  frame3: {
    width: 128,
    top: 0,
    left: 0,
    position: "absolute",
  },
  h: {
    left: 57,
    color: Color.colorDimgray_600,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
    position: "absolute",
  },
  arrowDropUpIcon: {
    top: 2,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 21,
    color: Color.colorSeagreen,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  frame6: {
    width: 57,
    top: 0,
    overflow: "hidden",
  },
  hParent: {
    top: 38,
    width: 81,
  },
  text1: {
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  frameChild: {
    height: "47.06%",
    width: "3.49%",
    top: "26.47%",
    right: "0%",
    bottom: "26.47%",
    left: "96.51%",
  },
  frame8: {
    width: 172,
    height: 34,
    overflow: "hidden",
    position: "absolute",
  },
  frame7: {
    width: 178,
    top: 0,
    left: 0,
  },
  frame5: {
    top: 24,
    width: 178,
    left: 0,
    position: "absolute",
  },
  frameGroup: {
    left: 20,
    width: 178,
    top: 0,
  },
  frame2: {
    top: 77,
    width: 198,
    overflow: "hidden",
    left: 0,
  },
  frame: {
    height: 165,
    overflow: "hidden",
    top: 33,
    position: "absolute",
  },
  forPayees: {
    top: 7,
    left: 187,
    color: Color.colorDarkgray_400,
    textAlign: "center",
  },
  frameItem: {
    borderRadius: Border.br_81xl,
    height: 29,
    width: 150,
    top: 0,
    left: 0,
  },
  forPayers: {
    top: 6,
    left: 40,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  frame12: {
    left: 2,
    top: 1,
    overflow: "hidden",
  },
  forPayeesParent: {
    top: -1,
    backgroundColor: Color.colorGray_300,
    borderColor: Color.colorDarkgray_500,
    width: 302,
    borderWidth: 1,
    borderStyle: "solid",
    height: 33,
    borderRadius: Border.br_81xl,
    left: 29,
  },
  frame11: {
    width: 330,
    height: 31,
    top: 0,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  monthly: {
    left: 7,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  chevronIcon: {
    height: "10%",
    width: "11.46%",
    top: "47.5%",
    right: "11.46%",
    bottom: "42.5%",
    left: "77.08%",
    opacity: 0.8,
  },
  frame16: {
    left: 241,
    width: 96,
    top: 32,
    position: "absolute",
  },
  image13Icon: {
    top: 41,
    height: 23,
    left: 0,
  },
  frame18: {
    left: 162,
    height: 64,
    overflow: "hidden",
    top: 0,
  },
  enterAnAmount: {
    left: 29,
    textAlign: "left",
    top: 0,
    color: Color.colorDimgray_300,
  },
  frame19: {
    width: 224,
  },
  enterAmount: {
    left: 3,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  usdc: {
    left: 105,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frame20: {
    width: 149,
    top: 32,
    position: "absolute",
    left: 0,
  },
  frame17: {
    overflow: "hidden",
  },
  frame15: {
    width: 337,
    left: 29,
    top: 0,
  },
  frame14: {
    top: 161,
    width: 366,
    left: 0,
  },
  frame22: {
    width: 189,
  },
  enterJobTitle: {
    left: 26,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frame24: {
    top: 53,
    width: 337,
    left: 0,
    position: "absolute",
  },
  enterEmployeeName: {
    left: 13,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frame25: {
    height: 40,
    borderColor: Color.colorDarkgray_100,
    borderRadius: Border.br_10xs,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  frame23: {
    height: 93,
    width: 337,
    overflow: "hidden",
    left: 0,
  },
  frameView: {
    width: 337,
    left: 29,
  },
  frame21: {
    width: 366,
    left: 0,
    overflow: "hidden",
  },
  frame13: {
    top: 71,
    height: 233,
    overflow: "hidden",
    position: "absolute",
  },
  frame10: {
    height: 304,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frameInner: {
    top: 0,
  },
  home: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame28: {
    height: 15,
    overflow: "hidden",
    width: 58,
    left: 0,
  },
  homeFillIcon: {
    left: 0,
    position: "absolute",
  },
  frameParent1: {
    top: 19,
    left: 24,
    height: 50,
    width: 35,
    position: "absolute",
  },
  frame27: {
    top: 0,
    overflow: "hidden",
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
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: 0,
  },
  darhboardParent: {
    width: 35,
    left: 0,
  },
  refresh2Icon: {
    height: 35,
    width: 35,
    top: 0,
  },
  exchangeParent: {
    left: 72,
    width: 55,
  },
  frame30: {
    left: 319,
    top: 0,
    overflow: "hidden",
  },
  account: {
    left: -1,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    top: 33,
    position: "absolute",
  },
  userFillIcon: {
    width: 35,
    left: 6,
    top: 0,
  },
  frameParent2: {
    left: 223,
    top: 1,
  },
  groupFillIcon: {
    left: 8,
    position: "absolute",
  },
  business: {
    left: 1,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  groupFillParent: {
    left: 150,
    width: 50,
    top: 0,
  },
  frame29: {
    top: 20,
    left: 96,
    width: 270,
    overflow: "hidden",
  },
  homeRow: {
    top: 208,
  },
  frame34: {
    left: 260,
    height: 64,
    overflow: "hidden",
    top: 0,
  },
  frame35: {
    width: 139,
  },
  text2: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
    top: 12,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  usdc1: {
    left: 119,
    top: 12,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  frame36: {
    width: 238,
    top: 32,
    position: "absolute",
    left: 0,
  },
  frameParent3: {
    left: 0,
  },
  frame33: {
    left: 29,
    overflow: "hidden",
  },
  frame32: {
    width: 357,
    top: 0,
    left: 0,
  },
  eaInputBox: {
    borderRadius: Border.br_8xs,
    height: 44,
    left: 0,
  },
  startHere: {
    top: 13,
    left: 147,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 89,
    height: 18,
  },
  eaInputBoxParent: {
    left: 27,
    height: 44,
  },
  frame37: {
    top: 110,
    height: 44,
  },
  frame31: {
    height: 154,
    top: 0,
  },
  frame26: {
    top: 323,
    height: 295,
    overflow: "hidden",
    position: "absolute",
  },
  frame9: {
    top: 226,
    height: 618,
    overflow: "hidden",
    position: "absolute",
  },
  frameParent: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: Color.colorWhite,
  },
});

export default Frame;
