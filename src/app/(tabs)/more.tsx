import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const destinations = [
  { href: '/recovery' as const, label: 'Recovery' },
  { href: '/strain' as const, label: 'Strain' },
  { href: '/trends' as const, label: 'Trends' },
  { href: '/profile' as const, label: 'Profile' },
  { href: '/settings' as const, label: 'Settings' },
];

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.kicker}>PLACEHOLDER</Text>
      <Text style={styles.title}>More</Text>
      <Text style={styles.description}>
        Additional routes from the approved first-version list. No health logic yet.
      </Text>
      {destinations.map((item) => (
        <Link key={item.href} href={item.href} style={styles.link}>
          {item.label}
        </Link>
      ))}
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
    marginBottom: 24,
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
  },
  link: {
    paddingVertical: 14,
    fontSize: 17,
    color: '#171717',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#D8D8D8',
  },
});
