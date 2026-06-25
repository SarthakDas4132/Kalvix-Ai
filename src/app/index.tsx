import React from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoPill}>
            <Text style={styles.logoText}>K</Text>
          </View>
          <Text style={styles.brandTitle}>Kalvix.ai</Text>
        </View>

        {/* Hero Info */}
        <View style={styles.heroCard}>
          <Text style={styles.heroHeading}>We build brands that people actually love</Text>
          <Text style={styles.heroSub}>Your brand deserves to be Seen, Heard, and Remembered.</Text>
          
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaText}>Let's Work Together</Text>
          </Pressable>
        </View>

        {/* Feature Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Do</Text>
          
          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>⚡</Text>
              <Text style={styles.featureLabel}>Fast Delivery</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>💎</Text>
              <Text style={styles.featureLabel}>Premium Quality</Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>💸</Text>
              <Text style={styles.featureLabel}>Transparent Pricing</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>🌟</Text>
              <Text style={styles.featureLabel}>Bold Ideas</Text>
            </View>
          </View>
        </View>

        {/* Contact Info Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Kalvix.ai Creative Agency</Text>
          <Text style={styles.footerSubText}>Pune, MH • jmdsolutionbeyond@gmail.com</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fefae7', // var(--bg-cream)
  },
  scrollContainer: {
    padding: 24,
    gap: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoPill: {
    width: 36,
    height: 36,
    backgroundColor: '#ffe878', // var(--color-yellow)
    borderWidth: 2,
    borderColor: '#181a12',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#181a12',
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#181a12',
  },
  heroCard: {
    backgroundColor: '#fffef5', // var(--bg-white-pure)
    borderWidth: 2.5,
    borderColor: '#181a12',
    borderRadius: 24,
    padding: 32,
    shadowColor: '#181a12',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    alignItems: 'center',
    textAlign: 'center',
    gap: 16,
  },
  heroHeading: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#181a12',
  },
  heroSub: {
    fontSize: 16,
    textAlign: 'center',
    color: '#181a12',
    opacity: 0.8,
    lineHeight: 22,
  },
  ctaButton: {
    backgroundColor: '#ffe878',
    borderWidth: 2,
    borderColor: '#181a12',
    borderRadius: 9999,
    paddingVertical: 12,
    paddingHorizontal: 28,
    width: '100%',
    alignItems: 'center',
  },
  ctaText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#181a12',
    fontSize: 15,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#181a12',
    textTransform: 'uppercase',
  },
  featureRow: {
    flexDirection: 'row',
    gap: 16,
  },
  featureItem: {
    flex: 1,
    backgroundColor: '#fffef5',
    borderWidth: 2,
    borderColor: '#181a12',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#181a12',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    gap: 4,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#181a12',
    opacity: 0.8,
  },
  footerSubText: {
    fontSize: 12,
    color: '#181a12',
    opacity: 0.6,
  },
});

