// import React from 'react'
import {Button, Text, View, useState } from "react-native"


const Cat  = props => {
  
const [hungry, SetHungry] = useState(false);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {SetHungry ? 'Hungry' : "full"}!
      </Text>
      <Button
      OnPress = {() => {
        SetHungry(false)
      }}
      disabled={!SetHungry}
      title={hungry ? 'Hungry' : 'Full'}
        >
        Feed me!
      </Button>
    </View>

    
  )
}

const cafe = () => {

  return (
    <>
    <Cat name="Meraj"/>
    <Cat name="Anand"/>
    </>
  )
    

}

export default cafe