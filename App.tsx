// Archived Today UI mock. Not the app entry — package.json main is expo-router/entry.
// Keep until Today is rebuilt from repositories. Do not treat these numbers as product data.
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>TODAY</Text>
            <Text style={styles.date}>Monday, 5 October</Text>
          </View>

          <View style={styles.statusDot} />
        </View>

        {/* Recovery */}
        <View style={styles.recoveryCard}>
          <Text style={styles.cardLabel}>RECOVERY</Text>

          <View style={styles.recoveryRow}>
            <Text style={styles.recoveryScore}>78</Text>
            <View>
              <Text style={styles.recoveryUnit}>%</Text>
              <Text style={styles.recoveryStatus}>GOOD</Text>
            </View>
          </View>

          <Text style={styles.cardDescription}>
            Your body is ready for a solid day.
          </Text>
        </View>

        {/* Main metrics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BODY</Text>

          <View style={styles.grid}>
            <MetricCard
              title="HEART RATE"
              value="62"
              unit="bpm"
            />

            <MetricCard
              title="HRV"
              value="54"
              unit="ms"
            />

            <MetricCard
              title="SLEEP"
              value="7:42"
              unit=""
            />

            <MetricCard
              title="STRESS"
              value="28"
              unit="%"
            />
          </View>
        </View>

        {/* Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>ACTIVITY</Text>

          <View style={styles.activityCard}>
            <View>
              <Text style={styles.cardLabel}>STRAIN</Text>
              <Text style={styles.activityValue}>9.4</Text>
            </View>

            <View style={styles.activityDivider} />

            <View>
              <Text style={styles.cardLabel}>STEPS</Text>
              <Text style={styles.activityValue}>8,426</Text>
            </View>

            <View style={styles.activityDivider} />

            <View>
              <Text style={styles.cardLabel}>CALORIES</Text>
              <Text style={styles.activityValue}>1,842</Text>
            </View>
          </View>
        </View>

        {/* Data status */}
        <View style={styles.footerCard}>
          <View style={styles.connectedDot} />
          <Text style={styles.footerText}>
            Demo data · wearable not connected
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MetricCard({
  title,
  value,
  unit,
}: {
  title: string;
  value: string;
  unit: string;
}) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricTitle}>{title}</Text>

      <View style={styles.metricValueRow}>
        <Text style={styles.metricValue}>{value}</Text>
        {unit !== '' && <Text style={styles.metricUnit}>{unit}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F3',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  greeting: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#777777',
  },

  date: {
    marginTop: 5,
    fontSize: 15,
    color: '#444444',
  },

  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#999999',
  },

  recoveryCard: {
    backgroundColor: '#171717',
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
  },

  cardLabel: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#999999',
  },

  recoveryRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
  },

  recoveryScore: {
    fontSize: 76,
    lineHeight: 82,
    fontWeight: '300',
    color: '#FFFFFF',
  },

  recoveryUnit: {
    fontSize: 18,
    color: '#AAAAAA',
    marginBottom: 38,
    marginLeft: 4,
  },

  recoveryStatus: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#FFFFFF',
    marginLeft: 4,
    marginBottom: 16,
  },

  cardDescription: {
    marginTop: 8,
    fontSize: 14,
    color: '#AAAAAA',
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.8,
    color: '#777777',
    marginBottom: 12,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  metricCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    minHeight: 105,
    justifyContent: 'space-between',
  },

  metricTitle: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#888888',
  },

  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 12,
  },

  metricValue: {
    fontSize: 30,
    fontWeight: '500',
    color: '#171717',
  },

  metricUnit: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 5,
  },

  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  activityValue: {
    fontSize: 22,
    fontWeight: '500',
    color: '#171717',
    marginTop: 6,
  },

  activityDivider: {
    width: 1,
    height: 45,
    backgroundColor: '#E5E5E5',
  },

  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },

  connectedDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#AAAAAA',
    marginRight: 8,
  },

  footerText: {
    fontSize: 11,
    color: '#999999',
  },
});