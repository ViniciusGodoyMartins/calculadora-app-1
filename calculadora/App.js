import React, { useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, Pressable, View } from 'react-native';

import CalcButton from "./components/CalcButton";
import Display from "./components/Display";
import { themes } from "./theme/token";
import { createEngine } from "./utils/calcEngine";

export default function App() {
  const [mode, setMode] = useState("dark");
  const theme = themes[mode];

  return (
    <View style={[styles.container, {backgroundColor: theme.bg}]}>
      <StatusBar barStyle={"dark" ? "light-content" : "dark-content"} />

      <View style={styles.topBar}>
        <Pressable
        onPress={() => setMode((m) => (m === "dark" ? "light" : "dark"))}>
          <Text style={{ color: theme.text, fontWeight: "700"}}>
            {mode ==="dark" ? "Escuro" : "Claro"}
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});