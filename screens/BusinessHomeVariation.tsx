import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const BusinessHomeVariation = () => {
  return (
    <View style={styles.businessHomeVariation}>
      <View
        style={[
          styles.businessHomeVariationChild,
          styles.businessHomeVariationChildLayout,
        ]}
      />
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
      <View style={[styles.homeRow, styles.homeLayout]}>
        <Image
          style={[styles.homeRowChild, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-390.png")}
        />
        <View style={[styles.homeParent, styles.parentPosition1]}>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Image
            style={[styles.homeFillIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/home-fill1.png")}
          />
        </View>
        <View style={[styles.darhboardParent, styles.parentPosition]}>
          <View style={[styles.homeFillIcon, styles.iconLayout]}>
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
            style={[styles.refresh2Icon, styles.refresh2IconPosition]}
            contentFit="cover"
            source={require("../assets/refresh-21.png")}
          />
        </View>
        <View style={styles.groupFillParent}>
          <Image
            style={[styles.refresh2Icon, styles.refresh2IconPosition]}
            contentFit="cover"
            source={require("../assets/group-fill3.png")}
          />
          <Text style={styles.business}>Business</Text>
        </View>
        <View style={[styles.accountParent, styles.parentPosition]}>
          <Text style={[styles.farms, styles.homeTypo]}>Account</Text>
          <Image
            style={styles.userFillIcon}
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
        <Text style={[styles.text, styles.textTypo1]}>$21,524.12</Text>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Text style={[styles.businessBalance, styles.march2024Typo]}>
          Business Balance
        </Text>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textTypo1]}>5.63%</Text>
          <Text style={[styles.h, styles.textTypo1]}>24H</Text>
          <Image
            style={styles.arrowDropUpIcon}
            contentFit="cover"
            source={require("../assets/arrow-drop-up1.png")}
          />
        </View>
      </View>
      <View style={styles.businessHomeVariationItem} />
      <View style={[styles.groupParent, styles.parentPosition1]}>
        <View style={styles.viewAllUpcomingPayoutsParent}>
          <Text
            style={[styles.viewAllUpcoming, styles.viewTypo]}
          >{`View all upcoming payouts `}</Text>
          <Image
            style={styles.arrowIcon}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </View>
        <View style={[styles.payoutTileParent, styles.parentFlexBox]}>
          <View style={styles.payoutTile}>
            <View style={[styles.listboxbg, styles.listboxbgShadowBox]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.march2024Typo}>Employee Payout</Text>
              <Text style={[styles.text2, styles.textTypo]}>$21,524.12</Text>
              <View style={[styles.vectorParent, styles.vectorLayout]}>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/rectangle-301.png")}
                />
                <Text style={[styles.days, styles.daysTypo]}>• 3 Days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.payoutTile1, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg1, styles.listboxbgLayout]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.march2024Typo}>Automated Deposit</Text>
              <Text style={[styles.text3, styles.textTypo]}>$40,524.12</Text>
              <View style={[styles.vectorParent, styles.vectorLayout]}>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/rectangle-302.png")}
                />
                <Text style={[styles.days1, styles.daysTypo]}>• 6 Days</Text>
              </View>
            </View>
          </View>
          <View style={[styles.payoutTile1, styles.listboxbgLayout]}>
            <View style={[styles.listboxbg2, styles.listboxbgLayout]} />
            <View
              style={[styles.employeePayoutParent, styles.refresh2IconPosition]}
            >
              <Text style={styles.march2024Typo}>Automated Deposit</Text>
              <Text style={[styles.text3, styles.textTypo]}>$40,524.12</Text>
              <View style={[styles.vectorContainer, styles.vectorLayout]}>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/rectangle-302.png")}
                />
                <Text style={[styles.days2, styles.daysTypo]}>• 32 Days</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.paymentSchedule, styles.transactionsTypo]}>
          Payment Schedule
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.viewFullTransactionHistoryParent}>
          <Text style={[styles.viewFullTransaction, styles.viewTypo]}>
            View full transaction history
          </Text>
          <Image
            style={styles.arrowIcon1}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </View>
        <Text style={styles.transactionsTypo}>Transactions</Text>
        <Text style={[styles.march2024, styles.march2024Typo]}>
          March, 2024
        </Text>
        <View style={[styles.transactionParent, styles.parentFlexBox]}>
          <View style={styles.transactionLayout}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild1, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-42.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild9, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild1, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-42.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild1, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-42.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild9, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild1, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-42.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild1, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-42.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild9, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild3, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-43.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionChild9, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-44.png")}
            />
          </View>
          <View style={[styles.transaction1, styles.transactionLayout]}>
            <View style={styles.transactionChildLayout} />
            <Image
              style={[styles.transactionItem, styles.transactionChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-41.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  businessHomeVariationChildLayout: {
    width: 390,
    left: 0,
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
  homeLayout: {
    height: 87,
    width: 390,
    left: 0,
    position: "absolute",
  },
  parentPosition1: {
    left: 24,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorDimgray_600,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 35,
    width: 35,
    top: 0,
  },
  parentPosition: {
    height: 48,
    top: 21,
    position: "absolute",
  },
  darhboardLayout: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
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
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    width: "30.86%",
    height: "30.86%",
    position: "absolute",
  },
  refresh2IconPosition: {
    left: 10,
    position: "absolute",
  },
  textTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  march2024Typo: {
    color: Color.colorDimgray_300,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  viewTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  listboxbgShadowBox: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textTypo: {
    marginTop: 10,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorLayout: {
    height: 23,
    marginTop: 10,
  },
  daysTypo: {
    width: 64,
    top: 4,
    textAlign: "center",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  listboxbgLayout: {
    width: 131,
    height: 100,
  },
  transactionsTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 0,
    top: 0,
    position: "absolute",
  },
  transactionChildLayout1: {
    width: 6,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  transactionLayout: {
    height: 75,
    width: 6,
  },
  businessHomeVariationChild: {
    backgroundColor: Color.colorWhite,
    width: 390,
    top: 0,
    position: "absolute",
    height: 844,
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
    top: 33,
    width: 390,
    left: 0,
  },
  homeRowChild: {
    top: 0,
  },
  home: {
    top: 35,
  },
  homeFillIcon: {
    left: 0,
    position: "absolute",
  },
  homeParent: {
    top: 19,
    height: 50,
    width: 35,
  },
  darhboardChild: {
    bottom: "55.43%",
    top: "13.71%",
  },
  darhboardItem: {
    borderWidth: 2,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    borderRadius: Border.br_12xs,
    left: "13.71%",
    right: "55.43%",
    width: "30.86%",
    height: "30.86%",
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
    height: 35,
    width: 35,
    top: 0,
  },
  exchangeParent: {
    left: 168,
    width: 55,
  },
  business: {
    top: 34,
    color: Color.colorGray_200,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  groupFillParent: {
    top: 20,
    left: 244,
    width: 54,
    height: 49,
    position: "absolute",
  },
  userFillIcon: {
    height: 33,
    left: 6,
    width: 35,
    top: 0,
    position: "absolute",
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
    left: 115,
    width: 13,
    height: 13,
    position: "absolute",
  },
  text: {
    top: 24,
    fontSize: FontSize.size_9xl,
    color: Color.colorGray_400,
    left: 6,
  },
  groupChild: {
    height: "18.18%",
    width: "3.37%",
    top: "37.5%",
    bottom: "44.32%",
    left: "96.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  businessBalance: {
    left: 7,
    top: 0,
    position: "absolute",
  },
  text1: {
    left: 21,
    color: Color.colorSeagreen,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 0,
  },
  h: {
    left: 57,
    color: Color.colorDimgray_600,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: 0,
  },
  arrowDropUpIcon: {
    top: 2,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  parent: {
    top: 62,
    width: 81,
    height: 26,
    left: 0,
    position: "absolute",
  },
  eyeParent: {
    top: 110,
    left: 20,
    width: 178,
    height: 88,
    position: "absolute",
  },
  businessHomeVariationItem: {
    top: 706,
    left: 144,
    width: 108,
    height: 18,
    position: "absolute",
  },
  viewAllUpcoming: {
    width: 188,
    height: 21,
  },
  arrowIcon: {
    top: 6,
    left: 188,
    width: 12,
    height: 10,
    position: "absolute",
  },
  viewAllUpcomingPayoutsParent: {
    top: 172,
    left: 70,
    width: 200,
    height: 21,
    position: "absolute",
  },
  listboxbg: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
  },
  text2: {
    color: Color.colorRed,
  },
  groupItem: {
    borderRadius: Border.br_81xl,
    height: 23,
    width: 66,
    left: 0,
    top: 0,
    position: "absolute",
  },
  days: {
    left: 1,
    color: Color.colorRed,
  },
  vectorParent: {
    width: 66,
    height: 23,
  },
  employeePayoutParent: {
    top: 9,
    left: 10,
  },
  payoutTile: {
    width: 129,
    height: 100,
  },
  listboxbg1: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  text3: {
    color: Color.colorSeagreen,
  },
  days1: {
    left: 1,
    color: Color.colorSeagreen,
  },
  payoutTile1: {
    marginLeft: 20,
  },
  listboxbg2: {
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 14,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    position: "absolute",
    left: 0,
    top: 0,
  },
  days2: {
    left: 5,
    color: Color.colorSeagreen,
  },
  vectorContainer: {
    width: 69,
  },
  payoutTileParent: {
    top: 46,
    height: 116,
    left: 0,
  },
  paymentSchedule: {
    width: 219,
    height: 28,
  },
  groupParent: {
    top: 220,
    width: 431,
    height: 193,
  },
  viewFullTransaction: {
    width: 195,
    height: 18,
  },
  arrowIcon1: {
    top: 5,
    left: 200,
    width: 14,
    height: 9,
    position: "absolute",
  },
  viewFullTransactionHistoryParent: {
    top: 181,
    left: 68,
    width: 214,
    height: 18,
    position: "absolute",
  },
  march2024: {
    left: 1,
    top: 35,
    position: "absolute",
  },
  transactionChildLayout: {
    transform: [
      {
        rotate: "90deg",
      },
    ],
    height: 6,
    width: 75,
    backgroundColor: Color.colorDarkgray_300,
    borderRadius: Border.br_81xl,
    left: 6,
    top: 0,
    position: "absolute",
  },
  transactionItem: {
    top: 53,
    height: 22,
  },
  transactionChild1: {
    top: 22,
    height: 53,
  },
  transaction1: {
    marginLeft: 4,
  },
  transactionChild3: {
    top: 37,
    height: 38,
  },
  transactionChild9: {
    top: 12,
    height: 63,
  },
  transactionParent: {
    top: 78,
    left: 1,
  },
  groupContainer: {
    top: 442,
    left: 26,
    width: 327,
    height: 199,
    position: "absolute",
  },
  businessHomeVariation: {
    flex: 1,
    overflow: "hidden",
    height: 844,
    width: "100%",
  },
});

export default BusinessHomeVariation;
