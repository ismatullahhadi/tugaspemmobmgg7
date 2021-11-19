import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SplashScreen from 'react-native-splash-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Account Registration"
          component={AccountRegistration}
          options={{
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Front Page"
          component={HomeTab}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Top Up"
          component={TopUpScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="QR Payment"
          component={ScanQrScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Payment Confirmation"
          component={QRPayConfirm}
          options={{
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Top Up Success"
          component={TopUpSuccess}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Pay Success"
          component={PaySuccessScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Transfer Check Number"
          component={TransferCheckNumber}
          options={{
            title: "Transfer",
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Transfer Process"
          component={TransferProcess}
          options={{
            title: "Transfer",
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Transfer Success"
          component={TransferSuccessScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#005690'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTab() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: 'white' }}
      labeled={false}
    >
      <Tab.Screen
        name = "Home"
        component = {HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Transaction History"
        component = {TransactionHistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="swap-vertical-bold" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name = "Profile"
        component = {ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
    {/* Logo */}
    <View style={{ marginTop: 40, marginHorizontal: 30, alignItems: 'center', marginBottom: 30 }}>
      <View style={{ backgroundColor: '#005690', borderRadius: 150 }}>
        <MaterialCommunityIcons name = 'react' size={150} color='white' />
      </View>
      <Text style={{paddingTop: 30, color: '#4982C1', fontWeight: 'bold', fontSize: 24}}>e-wallet</Text>
    </View>
    {/* Login email password */}
    <View style={{ flex: 1, marginHorizontal: 30 }}>
      <TextInput placeholder = "Email" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <TextInput placeholder = "Password" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <Button
        onPress={() => {
          navigation.navigate("Front Page")
        }}
        title = "Login"
        color = "#4982C1"
      />
    </View>
    {/* Registrasi */}
    <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 30 }}>
      <Text
        style={{ color: '#4E4E4E', paddingTop: 50, justifyContent: 'center'}}
        onPress={() => {
          navigation.navigate("Account Registration")
        }}
      >
        Registrasi
      </Text>
    </View>  
    </View>
  );
}

function AccountRegistration({navigation}) {
  return (
    <View style={{ flex: 1, marginHorizontal: 30, justifyContent: 'center' }}>
      <TextInput placeholder = "Email" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <TextInput placeholder = "Password" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <TextInput placeholder = "Name" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <TextInput placeholder = "No Handphone" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
      <Button
        onPress={() => {
          navigation.navigate("Login")
        }}
        title = "SUBMIT"
        color = "#4982C1"
      />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0' }}>
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end', paddingHorizontal: 20, paddingBottom: 20, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
      <Text style={{ color: '#484848', fontSize: 14 }}>Your Balance :</Text>
      <Text style={{ color: '#484848', fontSize: 36, fontWeight: '700' }}>Rp. 1.234.567.000</Text>
    </View>
    <View style={{ flex: 4, backgroundColor: '#F0F0F0', marginHorizontal: 20 }}>
      <View style={{ backgroundColor: '#4982C1', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, borderRadius: 4, elevation: 5 }}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Top Up")
          }}
        >
          <View>
            <View style={{ width: 48, height: 48, backgroundColor: 'white', borderRadius: 4, marginTop: 13, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name = 'plus' size={24} color='#757575' />
            </View>
            <Text style={{ fontSize: 14, color: 'white', marginBottom: 10, marginTop: 5, fontWeight: '800' }}>Top Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("QR Payment")
          }}
        >
          <View>
            <View style={{ width: 48, height: 48, backgroundColor: 'white', borderRadius: 4, marginTop: 13, alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name = 'image-filter-center-focus-weak' size={24} color='#757575' />
            </View>
            <Text style={{ fontSize: 14, color: 'white', marginBottom: 10, marginTop: 5, fontWeight: '800' }}>QR Pay</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Transfer Check Number")
          }}
        >
        <View>
          <View style={{ width: 48, height: 48, backgroundColor: 'white', borderRadius: 4, marginTop: 13, alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name = 'arrow-right' size={24} color='#757575' />
          </View>
          <Text style={{ fontSize: 14, color: 'white', marginBottom: 10, marginTop: 5, fontWeight: '800' }}>Transfer</Text>
        </View>
        </TouchableOpacity>
      </View>
      <Text style={{ paddingTop: 37, paddingBottom: 9, color: 'black' }}>5 Latest Transactions</Text>
      <ScrollView>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
        </View>
      </ScrollView>
    </View>
    </View>
  );
}

function TransactionHistoryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F0F0', paddingHorizontal: 20, paddingTop: 26 }}>
      <ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, marginBottom: 16, elevation: 5 }}>
          <MaterialCommunityIcons name = 'swap-horizontal' size={24} color='#757575' />
          <View>
            <Text style={{ color: 'black', paddingBottom: 12 }}>Rp. 80.000</Text>
            <Text style={{ color: 'black' }}>Transfer to 0822402006861</Text>
          </View>
          <Text style={{ color: 'black' }}>20/08/2020</Text>
      </View>
      </ScrollView>
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#005690' }}>
        <View style={{ backgroundColor: 'white', width: 100, height: 100, marginBottom: 20, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
          <MaterialCommunityIcons name = 'account-circle' size={100} color='#005690' />
        </View>
        <Text style={{ color: 'white', fontSize: 18, paddingBottom: 10 }}>Ismatullah Hadi</Text>
        <Text style={{ color: 'white', fontSize: 18, paddingBottom: 10 }}>082148193810</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#F0F0F0', paddingHorizontal: 40, paddingTop: 35, paddingBottom: 100, justifyContent: 'space-around' }}>
      <Button
        onPress={() => {
          navigation.navigate("Home")
        }}
        title = "CHANGE PROFILE"
        color = "#4982C1"
      />
      <Button
        onPress={() => {
          navigation.navigate("Home")
        }}
        title = "CHANGE PASSWORD"
        color = "#4982C1"
      />
      <Button
        onPress={() => {
          navigation.navigate("Login")
        }}
        title = "LOGOUT"
        color = "#4982C1"
      />
      </View>
    </View>
  );
}

function TopUpScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3, backgroundColor: '#F4F4F4', justifyContent: 'center', paddingHorizontal: 40 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./icon/topup.png')} />
        </View>
        <TextInput placeholder = "Nominal Top Up" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
        <Button
          onPress={() => {
            navigation.navigate("Top Up Success")
          }}
          title = "SUBMIT"
          color = "#4982C1"
        />
      </View>
      <View style={{ flex: 1 }}>
      </View>
    </View>
  );
}

function ScanQrScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            navigation.navigate("Payment Confirmation")
          }}
      >
      <View style={{ backgroundColor: '#C4C4C4', width: 319, height: 319, alignItems: 'center', justifyContent: 'center' }}>
        <MaterialCommunityIcons name='camera' size={24} color='#5A5A5A' />
      </View>
      </TouchableOpacity>
    </View>
  );
}

function QRPayConfirm({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 3, alignItems: 'center', justifyContent:'center'}}>
        <Image source={require('./icon/payconfirm.png')} />
        <Text style={{ color: '#333333', fontSize: 24, textDecorationLine: 'underline' }}>Rp 60.000</Text>
      </View>
      <View style={{ flex: 2, marginHorizontal: 40, backgroundColor: '#4982C1', alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 4 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Payment to:</Text>
        <Text style={{ color: 'white', fontSize: 24 }}>Basicschool</Text>
        <Text style={{ color: 'white', fontSize: 16 }}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: 40, justifyContent: 'center' }}>
      <Button
        onPress={() => {
          navigation.navigate("Pay Success")
        }}
        title = "SUBMIT"
        color = "#4982C1"
      />
      </View>
    </View>
  );
}

function TopUpSuccess({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 40 }}>
        <Image source={require('./icon/topup.png')} />
        <Text style={{ fontSize: 24, color: 'black', marginTop: 45 }}>Top Up Complete</Text>
        <Text style={{ fontSize: 24, color: 'black', marginTop: 15 }}>Rp. 60,000</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#4982C1', marginHorizontal: 40, alignItems: 'center', justifyContent: 'space-evenly', elevation: 5 }}>
        <Text style={{ fontSize: 18, color: 'white' }}>20 Agustus 2020</Text>
        <Text style={{ fontSize: 18, color: 'white' }}>VA Mandiri</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 40 }}>
        <Button
          onPress={() => {
            navigation.navigate("Home")
          }}
          title = "FINISH"
          color = "#4982C1"
        />
      </View>
    </View>
  );
}

function PaySuccessScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 40 }}>
        <Image source={require('./icon/payconfirm.png')} />
        <Text style={{ fontSize: 24, color: 'black', marginTop: 45 }}>Payment Complete</Text>
        <Text style={{ fontSize: 24, color: 'black', marginTop: 15 }}>Rp. 60,000</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#4982C1', marginHorizontal: 40, alignItems: 'center', justifyContent: 'space-evenly', elevation: 5 }}>
        <Text style={{ fontSize: 18, color: 'white' }}>20 Agustus 2020</Text>
        <Text style={{ fontSize: 18, color: 'white' }}>Merchant : Basicschool</Text>
        <Text style={{ fontSize: 18, color: 'white' }}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 40 }}>
        <Button
          onPress={() => {
            navigation.navigate("Home")
          }}
          title = "FINISH"
          color = "#4982C1"
        />
      </View>
    </View>
  );
}

function TransferCheckNumber({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 40 }}>
        <View style={{ alignItems: 'center', marginBottom: 50 }}>
          <Image source={require('./icon/transfer.png')} />
        </View>
        <TextInput placeholder = "Receiver Phone Number" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20, marginBottom: 25 }} />
        <Button
          onPress={() => {
            navigation.navigate("Transfer Process")
          }}
          title = "CHECK NUMBER"
          color = "#4982C1"
        />
      </View>
      <View style={{ flex: 1 }}>
      </View>
    </View>
  );
}

function TransferProcess({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 3, justifyContent: 'center', paddingHorizontal: 40 }}>
        <View style={{ alignItems: 'center', marginBottom: 50 }}>
          <Image source={require('./icon/transfer.png')} />
        </View>
        <TextInput placeholder = "Nominal Transfer" style={{ borderWidth: 1, borderColor: '#C3C3C3', borderRadius: 5, paddingLeft: 20}} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Receiver :</Text>
        <Text style={{ fontSize: 16, color: 'black' }}>Dendy Aditya</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 40 }}>
        <Button
          onPress={() => {
            navigation.navigate("Transfer Success")
          }}
          title = "Transfer"
          color = "#4982C1"
        />
      </View>
    </View>
  );
}

function TransferSuccessScreen({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center', marginHorizontal: 40 }}>
        <Image source={require('./icon/transfer.png')} />
        <Text style={{ fontSize: 24, color: 'black', marginTop: 45 }}>Transfer Success!</Text>
        <Text style={{ fontSize: 24, color: 'black', marginTop: 15 }}>Rp. 100,000</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#4982C1', marginHorizontal: 40, alignItems: 'center', justifyContent: 'space-evenly', elevation: 5 }}>
        <Text style={{ fontSize: 18, color: 'white' }}>20 Agustus 2020</Text>
        <Text style={{ fontSize: 18, color: 'white' }}>Receiver : Dendy Aditya</Text>
        <Text style={{ fontSize: 18, color: 'white' }}>082240206xxx</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', marginHorizontal: 40 }}>
        <Button
          onPress={() => {
            navigation.navigate("Home")
          }}
          title = "FINISH"
          color = "#4982C1"
        />
      </View>
    </View>
  );
}