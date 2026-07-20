import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacyPolicyScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.brandTitle}>Kalvix.ai</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Privacy Policy</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Last Updated: July 17, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.bodyText}>
              {"The Kalvix AI (\"we\", \"our\", or \"us\") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by The Kalvix AI. This policy applies specifically to the services we offer through our application, including our integrations with Meta platforms (Facebook and Instagram)."}
            </Text>

            <Text style={styles.sectionTitle}>1. Information We Collect</Text>
            <Text style={styles.bodyText}>
              {"We collect information that you provide directly to us or authorize us to access when you use our application:\n\n• Account Information: Name, email address, and basic profile details.\n• Meta Platform Data: When you connect your Facebook or Instagram accounts, we collect public profile information, Page access tokens, Instagram account IDs, and related media content necessary to provide our automated publishing and analysis services.\n• User-Generated Content: Campaign details, brand data, generated images, and textual content created or uploaded within our platform."}
            </Text>

            <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
            <Text style={styles.bodyText}>
              {"We use the information we collect to:\n\n• Provide, operate, and maintain our application, including scheduling and publishing posts to your connected Meta accounts.\n• Generate AI-powered content and conduct brand DNA analysis based on the parameters you provide.\n• Improve, personalize, and expand our application's functionality.\n• Understand and analyze how you use our application.\n• Communicate with you regarding updates, security alerts, and support messages."}
            </Text>

            <Text style={styles.sectionTitle}>3. Third-Party Data Sharing</Text>
            <Text style={styles.bodyText}>
              {"We share your information only in the following specific circumstances:\n\n• AI Service Providers: We utilize third-party AI models (such as Google Gemini and OpenAI) to generate images and text. Necessary context (like brand data and campaign parameters) may be shared securely with these services strictly for content generation purposes.\n• Meta Integration: Your content and necessary authentication tokens are transmitted securely to Meta's APIs (Graph API) for publishing and campaign management purposes in accordance with Meta's Platform Terms.\n• Legal Compliance: We may disclose information if required to do so by law or in response to valid requests by public authorities.\n\nWe do not sell, rent, or trade your personal information to third parties."}
            </Text>

            <Text style={styles.sectionTitle}>4. Data Retention and Deletion (Meta App Requirement)</Text>
            <Text style={styles.bodyText}>
              {"We retain your data only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy.\n\nData Deletion Instructions:\nYou have the right to request the deletion of your personal data. If you wish to revoke our app's access to your Meta account and delete your associated data, please follow these steps:\n\n1. Log in to your Facebook account and go to Settings & Privacy > Settings.\n2. Navigate to Apps and Websites in the left-hand menu.\n3. Find The Kalvix AI in the list of active apps.\n4. Click Remove and confirm the removal.\n5. To ensure all your data is entirely wiped from our servers, please send a data deletion request to legal@kalvix.ai with the subject line \"Data Deletion Request\". We will process your request within 7 days."}
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
              {"The Kalvix AI\nEmail: legal@kalvix.ai\nWebsite: https://kalvix.ai"}
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
