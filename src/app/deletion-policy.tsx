import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeletionPolicyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.brandTitle}>M-Auxis</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Deletion Policy</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Last Updated: July 28, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.bodyText}>
              {"M-Auxis allows users to log in and connect their accounts using third-party Meta services, including Facebook, Instagram, and Meta Ads Manager. We respect your privacy and give you full control over your data.\n\nIf you wish to have your account and all associated data permanently deleted from M-Auxis, you can do so by following these steps:"}
            </Text>

            <Text style={styles.sectionTitle}>Option 1: Complete Account & Data Deletion via Email</Text>
            <Text style={styles.bodyText}>
              {"To request the complete deletion of your M-Auxis account and all synced Meta data (including connected Instagram profiles, Facebook pages, and Meta Ads campaign data):\n\n1. Send an email to support@jmdsolutionbeyond.com from the email address associated with your M-Auxis account.\n2. Use the subject line: \"Data Deletion Request\".\n3. Briefly state that you would like your account and all associated data permanently removed from our systems.\n4. Our team will process your request, completely sever the connection to your Meta services, and securely delete your data within 7 business days. We will notify you once it is complete."}
            </Text>

            <Text style={styles.sectionTitle}>Option 2: Revoke Access via Meta (Facebook / Instagram)</Text>
            <Text style={styles.bodyText}>
              {"If you wish to keep your M-Auxis account but want to disconnect our access to your Facebook, Instagram, or Meta Ads accounts:\n\n1. Go to your Facebook account’s Settings & Privacy.\n2. Click on Settings, then navigate to Apps and Websites (or Business Integrations depending on your account type).\n3. Find M-Auxis in the list of active apps and click Remove.\n4. This will immediately revoke M-Auxis's access to your Meta Ads, Facebook Pages, and Instagram accounts. No new data will be synced to our systems."}
            </Text>
          </View>
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
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#181a12',
  },
  card: {
    backgroundColor: '#fffef5', // var(--bg-white-pure)
    borderWidth: 2.5,
    borderColor: '#181a12',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#181a12',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#181a12',
    marginBottom: 4,
  },
  dateContainer: {
    marginBottom: 20,
    gap: 2,
  },
  date: {
    fontSize: 13,
    color: '#181a12',
    opacity: 0.6,
  },
  content: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181a12',
    marginTop: 8,
  },
  bodyText: {
    fontSize: 15,
    color: '#181a12',
    lineHeight: 22,
    opacity: 0.8,
  },
});
