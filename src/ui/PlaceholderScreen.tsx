import { StyleSheet, Text, View } from 'react-native';

type PlaceholderScreenProps = {
  title: string;
  description?: string;
};

export function PlaceholderScreen({
  title,
  description = 'This screen is a navigation placeholder. It is not wired to health data yet.',
}: PlaceholderScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>PLACEHOLDER</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F3',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  kicker: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: '#777777',
  },
  title: {
    marginTop: 8,
    fontSize: 28,
    fontWeight: '500',
    color: '#171717',
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
  },
});
