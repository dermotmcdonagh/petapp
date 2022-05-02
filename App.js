//Dermot McDonagh

// importing components from react
import * as React from 'react';
import {SafeAreaView, Button, ScrollView, StyleSheet, Text, TouchableOpacity, Pressable,  Image,  Icon, View, Platform } from 'react-native';
import {Title, Caption, Card, RadioGroup, RadioButton, TextInput, TouchableRipple, Paragraph} from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

// importing library for tabbed navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importing radio button and icons
import RadioForm from "react-native-radio-form";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Using Aircraft Icon for travel screen
import { Entypo } from "@expo/vector-icons";

// radio buttons for language settings
const mockData1 = [
  { label: "No", value: 1 },
  { label: "Yes", value: 2 },
];

// Listing all EU official languages
const mockData = [
  { label: "English", value: 1 },
  { label: "German", value: 2 },
  { label: "French", value: 3 },
  { label: "Italian", value: 4 },
  { label: "Spanish", value: 5 },
  { label: "Polish", value: 6 },
  { label: "Romanian", value: 7 },
  { label: "Dutch", value: 8 },
  { label: "Hungarian", value: 9 },
  { label: "Portuguese", value: 10 },
  { label: "Greek", value: 11 },
  { label: "Swedish", value: 12 },
  { label: "Czech", value: 10 },
  { label: "Bulgarian", value: 11 },
  { label: "Slovak", value: 12 },
  { label: "Danish", value: 13 },
  { label: "Finnish", value: 14 },
  { label: "Croatian", value: 15 },
  { label: "Lithuanian", value: 16 },
  { label: "Slovene", value: 17 },
  { label: "Estonian", value: 18 },
  { label: "Irish", value: 16 },
  { label: "Latvian", value: 17 },
  { label: "Maltese", value: 18 },
];

// Screen Details
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
  

        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <Card.Title title="Registered" subtitle="Dec 24 2020" />
            <Card.Content>
              <Ionicons name="paw" size={88} color="black" />
            </Card.Content>
          </View>
        </Card>

        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={{ margin: 16 }}>
              <Paragraph>Address</Paragraph>
              <Title>15 New Knock</Title>
              <Paragraph>Post Code</Paragraph>
              <Title>D01 BA12</Title>
              <Paragraph>City</Paragraph>
              <Title>Dublin</Title>
              <Paragraph>Country</Paragraph>
              <Title>Ireland</Title>
              <Paragraph>Telephone</Paragraph>
              <Title>087 12345678</Title>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

function LanguageScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Card style={styles.travelcard} title="Local Modules">
          {/*react-native-elements Card*/}

          <RadioForm
            style={{ flexWrap: "wrap", margin: 8, fontSize: 24, padding: 16 }}
            dataSource={mockData}
            itemShowKey="label"
            itemRealKey="value"
            initial={0}
          />
        </Card>
      </View>
    </ScrollView>
  );
}

function AddScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <TextInput style={styles.input} label="Name" />
            <TextInput style={styles.input} label="Species" />

            <TextInput style={styles.input} label="Breed" />

            <TextInput style={styles.input} label="Date of Birth" />

            <TouchableOpacity
              // added alert message to show user can attach photo
              onPress={() => alert("User can attach photo")}
              style={{ padding: 8 }}
            >
              <Text style={{ fontSize: 16 }}>Attach Photo</Text>
            </TouchableOpacity>
            <Button
              color="#007AFE"
              onPress={() =>
                alert("User gets confirmation that details are added")
              }
              title={"Confirm"}
              style={styles.input}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function AdoptedScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <TextInput style={styles.input} label="Pet Name" />
            <TextInput style={styles.input} label="New Owner Name" />

            <TextInput style={styles.input} label="Date" />

            <Button
              title={"Confirm"}
              onPress={() =>
                alert(
                  "User gets confirmation pet owership has been transferred"
                )
              }
              style={styles.input}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function MissingScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <TextInput style={styles.input} label="Name" />
            <TextInput style={styles.input} label="Date Last Seen" />

            <TextInput style={styles.input} label="Cause (If Known)" />

            <Button
              title={"Confirm"}
              onPress={() =>
                alert("User gets confirmation missing pet has been reported")
              }
              style={styles.input}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function DeceasedScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <TextInput style={styles.input} label="Pet Name" />
            <TextInput style={styles.input} label="Date of Death" />
            <Text>Would you like to memorialise your Pet?</Text>
            <RadioForm
              style={{ flexWrap: "wrap" }}
              dataSource={mockData1}
              itemShowKey="label"
              itemRealKey="value"
              initial={0}
            />
            <Button
              title={"Confirm"}
              onPress={() =>
                alert(
                  "User gets confirmation letting them know app has been updated"
                )
              }
              style={styles.input}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function FeedbackScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <TextInput
              multiline={true}
              numberOfLines={10}
              style={styles.input}
              label="Make Us Better"
            />

            <Button
              title={"Confirm"}
              onPress={() =>
                alert('User gets "Thanks for your feedback" message')
              }
              style={styles.input}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

function MicrochipScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <Card.Title title="11233434053" subtitle="EXPIRES JUNE 22 2027" />

            <Card.Content>
              <Ionicons name="barcode-outline" size={88} color="black" />
            </Card.Content>
          </View>
        </Card>

        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={{ margin: 16 }}>
              <Paragraph>Date of Microchip</Paragraph>
              <Title>01/02/2021</Title>
              <Paragraph>Location of Microchip</Paragraph>
              <Title>Top of Shoulder</Title>
              <Paragraph>Tattoo Number</Paragraph>
              <Title>N/A</Title>
              <Paragraph>Date of Tattoo</Paragraph>
              <Title>N/A</Title>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

function PetProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Card style={styles.travelcard}>
            <View style={styles.profilephotoblue}>
              <Image
                source={require("./assets/cat.png")}
                style={{
                  flex: 1,
                  height: 200,
                  width: 200,
                  borderRadius: 200 / 2,
                  margin: 10,
                  borderWidth: 4,
                  borderColor: "#ffffff",
                  resizeMode: "cover", // <- needs to be "cover" for borderRadius to take effect on Android
                }}
              />
              <View style={[styles.photoBox]}>
                <Title style={[styles.whitetext]}>
                  {" "}
                  <Ionicons name="md-checkmark-circle" color="#fff" size={20} />
                  eVerified
                </Title>
              </View>
            </View>

            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox]}>
                  <Title>Pet Details</Title>
                </View>
                <View style={styles.nationalFlag}>
                  <Image
                    source={require("./assets/EU_Ireland_Flag.png")}
                    style={{
                      flex: 1,
                      height: 50,
                      width: 50,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.passportTitle}>
              <Paragraph>Name</Paragraph>
              <Title>Denzel</Title>

              <Paragraph>Species</Paragraph>
              <Title>Cat</Title>

              <Paragraph>Breed</Paragraph>
              <Title>American Curl</Title>

              <Paragraph>Date of Birth</Paragraph>
              <Title>09/02/2021</Title>

              <Button
                color="#007AFE"
                accessibilityLabel="Go To Pet ID Details"
                icon={<Icon name="arrow-right" size={15} color="black" />}
                title="Pet ID"
                onPress={() => navigation.navigate("Microchip Details")}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function OwnerProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Card style={styles.travelcard}>
            <View style={styles.profilephotogrey}>
              <Image
                source={require("./assets/brona.png")}
                style={{
                  flex: 1,
                  height: 200,
                  width: 200,
                  borderRadius: 200 / 2,
                  margin: 10,
                  borderWidth: 4,
                  borderColor: "#ffffff",
                  resizeMode: "cover", // <- needs to be "cover" for borderRadius to take effect on Android
                }}
              />
              <View style={[styles.photoBox]}>
                <Title style={[styles.whitetext]}>
                  {" "}
                  <Ionicons name="md-checkmark-circle" color="#fff" size={20} />
                  eVerified
                </Title>
              </View>
            </View>

            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox]}>
                  <Title>Owner Details</Title>
                </View>
                <View style={styles.nationalFlag}>
                  <Image
                    source={require("./assets/EU_Ireland_Flag.png")}
                    style={{
                      flex: 1,
                      height: 50,
                      width: 50,
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.passportTitle}>
              <Paragraph>Name</Paragraph>
              <Title>Brona Fagan</Title>
              <Paragraph>Nationality</Paragraph>
              <Title>Irish</Title>
              <Paragraph>Passport Number</Paragraph>
              <Title>12345</Title>
              <Paragraph>Date of Birth</Paragraph>
              <Title>30/10/1996</Title>

              <Button   // <- set colour to blue and added alert message to explain user flow
                color="#007AFE"
                accessibilityLabel="Contact Details"
                icon={<Icon name="arrow-right" size={15} color="black" />}
                title="Contact Details"
                onPress={() => navigation.navigate("Contact Details")}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "space-evenly", margin: 24 }}>
      <Card style={styles.travelcard}>
        <Button
          title="Language"
          onPress={() => navigation.navigate("Language")}
        />
      </Card>

      <Card style={styles.travelcard}>
        <Button
          title="Add Pet"
          onPress={() => navigation.navigate("Add Pet")}
        />
      </Card>

      <Card style={styles.travelcard}>
        <Button
          title="Pet Adopted"
          onPress={() => navigation.navigate("Adopted")}
        />
      </Card>
      <Card style={styles.travelcard}>
        <Button
          title="Missing Pet"
          onPress={() => navigation.navigate("Missing")}
        />
      </Card>
      <Card style={styles.travelcard}>
        <Button
          title="Pet Bereavement"
          onPress={() => navigation.navigate("Deceased")}
        />
      </Card>
      <Card style={styles.travelcard}>
        <Button
          title="Feedback"
          onPress={() => navigation.navigate("Feedback")}
        />
      </Card>
    </View>
  );
}

function TravelScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollView}>

      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Title style={styles.travelhighlight}>June 22 2022</Title>
                </View>
                <View style={styles.cardflight}>
                  <Entypo name="aircraft" size={24} color="grey" />
                </View>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Paragraph>From</Paragraph>
                  <Title style={styles.travelhighlight}>London</Title>
                  <Paragraph>10:30 AM</Paragraph>
                </View>
                <View style={styles.cardflight}>
                  <Paragraph>To</Paragraph>
                  <Title style={styles.travelhighlight}>Dublin</Title>
                  <Paragraph>11:15 AM</Paragraph>
                </View>
              </View>
            </View>

            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Title style={styles.travelhighlight}>Customs</Title>
                </View>
                <View style={styles.cardflight}>
                  <Title style={styles.travelcustom}>Approved</Title>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Title style={styles.travelhighlight}>June 21 2022</Title>
                </View>
                <View style={styles.cardflight}>
                  <Entypo name="aircraft" size={24} color="grey" />
                </View>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Paragraph>From</Paragraph>
                  <Title style={styles.travelhighlight}>Milan</Title>
                  <Paragraph>5:30 AM</Paragraph>
                </View>
                <View style={styles.cardflight}>
                  <Paragraph>To</Paragraph>
                  <Title style={styles.travelhighlight}>London</Title>
                  <Paragraph>8:00 AM</Paragraph>
                </View>
              </View>
            </View>

            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Title style={styles.travelhighlight}>Customs</Title>
                </View>
                <View style={styles.cardflight}>
                  <Title style={styles.travelcustom}>Approved</Title>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}> 
                  <Title style={styles.travelhighlight}>June 19 2022</Title>
                </View>
                <View style={styles.cardflight}>
                  <Entypo name="aircraft" size={24} color="#grey" />
                </View>
              </View>
            </View>
            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Paragraph>From</Paragraph>
                  <Title style={styles.travelhighlight}>Bucharest</Title>
                  <Paragraph>2:00 PM</Paragraph>
                </View>
                <View style={styles.cardflight}>
                  <Paragraph>To</Paragraph>
                  <Title style={styles.travelhighlight}>Milan</Title>
                  <Paragraph>4:15 PM</Paragraph>
                </View>
              </View>
            </View>

            <View style={styles.header}>
              <View style={styles.infoBoxWrapper}>
                <View style={[styles.infoBox2]}>
                  <Title style={styles.travelhighlight}>Customs</Title>
                </View>
                <View style={styles.cardflight}>
                  <Title style={styles.travelcustom}>Approved</Title>
                </View>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

function AddPetSuccess() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Card style={styles.travelcard}>
          <View style={{ margin: 16 }}>
            <Card.Title title="11233434053" subtitle="EXPIRES JUNE 22 2027" />

            <Card.Content>
              <Ionicons name="barcode-outline" size={88} color="black" />
            </Card.Content>
          </View>
        </Card>

        <Card style={styles.travelcard}>
          <Card.Content>
            <View style={{ margin: 16 }}>
              <Paragraph>Date of Microchip</Paragraph>
              <Title>01/02/2021</Title>
              <Paragraph>Location of Microchip</Paragraph>
              <Title>Top of Shoulder</Title>
              <Paragraph>Tattoo Number</Paragraph>
              <Title>N/A</Title>
              <Paragraph>Date of Tattoo</Paragraph>
              <Title>N/A</Title>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}


const HomeStack = createNativeStackNavigator();

function PetsStackScreen() {
  return (
    <HomeStack.Navigator >
     
      <HomeStack.Screen name="Home" component={PetProfileScreen} />
      <HomeStack.Screen name="Microchip Details" component={MicrochipScreen} />
    </HomeStack.Navigator>
  );
}

const OwnerStack = createNativeStackNavigator();

function OwnerStackScreen() {
  return (
    <OwnerStack.Navigator>
     
      <OwnerStack.Screen name="Owner" component={OwnerProfileScreen} />
      <OwnerStack.Screen name="Contact Details" component={ContactScreen} />
    </OwnerStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
   
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Language" component={LanguageScreen} />
      <SettingsStack.Screen name="Add Pet" component={AddScreen} />
      <SettingsStack.Screen name="Adopted" component={AdoptedScreen} />
      <SettingsStack.Screen name="Missing" component={MissingScreen} />
      <SettingsStack.Screen name="Deceased" component={DeceasedScreen} />
      <SettingsStack.Screen name="Feedback" component={FeedbackScreen} />
    </SettingsStack.Navigator>
  );
}

const TravelStack = createNativeStackNavigator();

function TravelStackScreen() {
  return (
    <TravelStack.Navigator>
      <TravelStack.Screen name="Travel" component={TravelScreen} />
    </TravelStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

// I had to move headershown false down as I only wanted to have ScreenOptions appear once, duplicate 4 times the same line to remove 2nd tab heading
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Owner") {
              iconName = focused ? "ios-body" : "ios-body";
            } else if (route.name === "Travel") {
              iconName = focused ? "ios-airplane" : "ios-airplane"; // used iOS icons for tab
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        
          tabBarActiveTintColor: "#007AFE",   // set Active state to blue
          tabBarInactiveTintColor: "#777",    // set defauly tab to grey
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={PetsStackScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Owner"
          component={OwnerStackScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Travel"
          component={TravelStackScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={SettingsStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 16,
    textAlign: "left",
  },

  infoBoxWrapper: {
    backgroundColor: "#ffffff",
    borderBottomColor: "#007AFE",
    flexDirection: "row",
    height: 75,
  },

  infoBox: {
    width: "64%",
    marginLeft: 32,
    justifyContent: "center",
  },

  infoBox2: {
    width: "56%",
    marginLeft: 16,
    justifyContent: "center",
  },

  nationalFlag: {
    marginLeft: 8,
    justifyContent: "center",
  },

  cardflight: {
    justifyContent: "center",
  },

  photoBox: {
    alignItems: "center",
    justifyContent: "center",
  },

  profilephotoblue: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFE",
    borderBottomRightRadius: 40,
    color: "#ffffff",
    padding: 16,
  },

  profilephotogrey: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#666666",
    borderBottomRightRadius: 40,
    color: "#ffffff",
    padding: 16,
  },

  header: {
    flex: 1,
    justifyContent: "center",
  },

  whitetext: {
    color: "#ffffff",
  },

  travelcard: { margin: 16, borderRadius: 16 },

  travelhighlight: { fontSize: 18 },
  travelcustom: { fontSize: 18, color: "teal" },
  input: { marginBottom: 16 },

  passportTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    color: "#37474f",
    marginLeft: 32,
  },
});


console.disableYellowBox = true;