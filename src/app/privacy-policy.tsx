import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.brandTitle}>M-Auxis</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Privacy Policy</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Last Updated: July 29, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.bodyText}>
              {"The M-Auxis AI (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by The M-Auxis AI. This policy applies specifically to the services we offer through our application, including our integrations with Meta platforms (Facebook and Instagram)."}
            </Text>

            <Text style={styles.sectionTitle}>1. Information We Collect</Text>
            <Text style={styles.bodyText}>
              {"We collect information that you provide directly to us or authorize us to access when you use our application:\n\n• Account Information: Name, email address, profile picture, and login authentication identifiers obtained via Google Sign-In or Meta authentication.\n• Google Ads API & Sign-In Data: When you connect your Google Ads account, we securely store the authentication tokens. We access your connected Google Ads account structure, campaign lists, budgets, creative assets, and analytics reports.\n• Meta Platform Data: When you connect your Facebook or Instagram accounts, we collect public profile information, Page access tokens, Instagram account IDs, and related media content necessary to provide our automated publishing and analysis services.\n• User-Generated Content: Campaign details, brand data, generated images, and textual content created or uploaded within our platform."}
            </Text>

            <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
            <Text style={styles.bodyText}>
              {"We use the information we collect to:\n\n• Provide, operate, and maintain our application, including scheduling and publishing posts to your connected Meta accounts.\n• Manage, monitor, update, and deploy advertising campaigns on Google Ads after you connect your Google account.\n• Generate AI-powered content and conduct brand DNA analysis based on the parameters you provide.\n• Improve, personalize, and expand our application's functionality.\n• Understand and analyze how you use our application.\n• Communicate with you regarding updates, security alerts, and support messages."}
            </Text>

            <Text style={styles.sectionTitle}>3. Third-Party Data Sharing</Text>
            <Text style={styles.bodyText}>
              {"We share your information only in the following specific circumstances:\n\n• AI Service Providers: We utilize third-party AI models (such as Google Gemini and OpenAI) to generate images and text. Necessary context (like brand data and campaign parameters) may be shared securely with these services strictly for content generation purposes.\n• Google Ads Integration: Your credentials and authentication scopes are processed via official Google APIs using OAuth2 protocol. M-Auxis uses this access solely to read, create, and manage campaigns under your explicit instruction. We do not sell or share Google user data with external third parties.\n• Meta Integration: Your content and necessary authentication tokens are transmitted securely to Meta's APIs (Graph API) for publishing and campaign management purposes in accordance with Meta's Platform Terms.\n• Legal Compliance: We may disclose information if required to do so by law or in response to valid requests by public authorities.\n\nWe do not sell, rent, or trade your personal information to third parties."}
            </Text>

            <Text style={styles.sectionTitle}>4. Data Deletion Instructions & Revoking Consent</Text>
            <Text style={styles.bodyText}>
              {"M-Auxis allows users to log in and connect their accounts using third-party services, including Google and Meta (Facebook / Instagram). We respect your privacy and give you full control over your data.\n\nIf you wish to have your account and all associated data permanently deleted from M-Auxis, you can do so by following these steps:\n\nOption 1: Complete Account & Data Deletion via Email\nTo request the complete deletion of your M-Auxis account and all synced advertising data (connected Google Ads, Meta Ads, and associated campaigns):\n\n1. Send an email to support@m-auxis.com from the email address associated with your M-Auxis account.\n2. Use the subject line: \"Data Deletion Request\".\n3. Briefly state that you would like your account and all associated data permanently removed from our systems.\n4. Our team will process your request, completely sever the connection to third-party integrations, and securely delete all stored records within 7 business days. We will notify you once complete.\n\nOption 2: Revoking Google Ads API Permission\nIf you wish to disconnect M-Auxis access from your Google Ads account:\n\n1. Go to your Google Account’s Third-party apps with account access settings page (https://myaccount.google.com/permissions).\n2. Find and click on M-Auxis in the list of authorized apps.\n3. Click Remove Access and confirm.\n\nOption 3: Revoke Access via Meta (Facebook / Instagram)\nIf you wish to keep your M-Auxis account but want to disconnect our access to your Facebook, Instagram, or Meta Ads accounts:\n\n1. Go to your Facebook account’s Settings & Privacy.\n2. Click on Settings, then navigate to Apps and Websites (or Business Integrations depending on your account type).\n3. Find M-Auxis in the list of active apps and click Remove.\n4. This will immediately revoke M-Auxis's access to your Meta Ads, Facebook Pages, and Instagram accounts."}
            </Text>

            <Text style={styles.sectionTitle}>5. Security</Text>
            <Text style={styles.bodyText}>
              {"We implement appropriate technical and organizational measures (including encryption and secure token storage) to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure."}
            </Text>

            <Text style={styles.sectionTitle}>6. Changes to This Privacy Policy</Text>
            <Text style={styles.bodyText}>
              {"We may update this Privacy Policy from time to time. We will notify you of any changes by updating the \"Last Updated\" date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes."}
            </Text>

            <Text style={styles.sectionTitle}>7. Contact Us</Text>
            <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>
              {"M-Auxis Support\nEmail: support@m-auxis.com\nWebsite: www.m-auxis.com\nContact: +91-9209552809"}
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
