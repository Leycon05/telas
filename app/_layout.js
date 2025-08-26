import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="contato"
        options={{
          title: 'Fale Conosco',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="suporte"
        options={{
          title: 'Suporte',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="termos"
        options={{
          title: 'Termos de Uso',
          headerShown: false,
        }}
      />
    </Stack>
  );
}