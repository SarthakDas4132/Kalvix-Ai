import React from 'react';
import { StyleSheet, View, Text, ScrollView, Linking } from 'react-native';
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
            <Text style={styles.date}>Date of Effectiveness: July 1, 2026</Text>
            <Text style={styles.date}>Date of Update: July 1, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>1. Introduction</Text>
            <Text style={styles.bodyText}>
              The Kalvix ("Kalvix", "Platform", "Company", "we", "our" or "us") values your privacy. This Privacy Policy contains information concerning collecting, using, storing and protecting of your data during using our website, apps, software, APIs, dashboards, and other services. The use of the Platform means that you accept all of the terms stated in this Privacy Policy.
            </Text>

            <Text style={styles.sectionTitle}>2. Information We Collect</Text>
            <Text style={styles.bodyText}>
              We collect information including the following:{"\n"}
              • Account information (name, email, phone number, company information).{"\n"}
              • Uploaded content (logos, brand assets, product images, video, document).{"\n"}
              • Customer data imported to CRM or automation systems.{"\n"}
              • Payment and billing information.{"\n"}
              • Usage information (log files, analytics, device information, IP address).
            </Text>

            <Text style={styles.sectionTitle}>3. How We Use Information</Text>
            <Text style={styles.bodyText}>
              We use information for:{"\n"}
              • Providing and improving of our services.{"\n"}
              • Personalization of user experience.{"\n"}
              • Processing of payment and subscriptions.{"\n"}
              • Enabling of integration with third-party platforms.{"\n"}
              • Communication with the users concerning any updates, promotions and support.{"\n"}
              • Compliance with any legal or regulatory requirements.
            </Text>

            <Text style={styles.sectionTitle}>4. Information Sharing</Text>
            <Text style={styles.bodyText}>
              We do not sell your personal information. We share your data solely in the following situations:{"\n"}
              • With third-party service providers (payment processors, hosting partners);{"\n"}
              • In case of compliance with legal or governmental obligations;{"\n"}
              • To protect the rights, property, and safety of Kalvix, its users, or the general public.
            </Text>

            <Text style={styles.sectionTitle}>5. Data Security</Text>
            <Text style={styles.bodyText}>
              We adopt technical and organizational measures to ensure the security of your information from any illegal access, loss, misuse, or leakage. But please note that any system is vulnerable, and we cannot ensure your information safety at 100%.
            </Text>

            <Text style={styles.sectionTitle}>6. User Responsibilities</Text>
            <Text style={styles.bodyText}>
              The responsibilities of users include:{"\n"}
              • Ensuring that customer data uploaded to Kalvix is collected legally;{"\n"}
              • Getting necessary consents for marketing communication;{"\n"}
              • Safeguarding of login details and making regular backups of data.
            </Text>

            <Text style={styles.sectionTitle}>7. Third-Party Integrations</Text>
            <Text style={styles.bodyText}>
              Kalvix can work with platforms like Meta Ads, Google Ads, Instagram, Facebook, LinkedIn, X (Twitter), TikTok, YouTube, and WhatsApp. Such integrations are governed by privacy policies of third parties.
            </Text>

            <Text style={styles.sectionTitle}>8. Data Retention</Text>
            <Text style={styles.bodyText}>
              We store user information for the period required for providing our services, complying with legal or governmental obligations, and resolving any disputes. User can ask for deleting the data according to relevant laws.
            </Text>

            <Text style={styles.sectionTitle}>9. Your Rights</Text>
            <Text style={styles.bodyText}>
              As per applicable laws, you may have rights to:{"\n"}
              • Access, rectify or delete your personal data.{"\n"}
              • Object or restrict certain processing.{"\n"}
              • Withdrawing consent for marketing purposes.{"\n"}
              These requests can be sent to legal@kalvix.ai.
            </Text>

            <Text style={styles.sectionTitle}>10. Amendments to this Policy</Text>
            <Text style={styles.bodyText}>
              This Privacy Policy may be modified from time to time by Kalvix. The modified policy will be posted on our website, and using the Platform will mean that you accept such modification.
            </Text>

            <Text style={styles.sectionTitle}>11. Contact Information</Text>
            <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>
              Kalvix.ai{"\n"}
              Email: legal@kalvix.ai{"\n"}
              Registered Office: Kalvix Technologies Pvt. Ltd., Pune, Maharashtra, India{"\n"}
              Website: https://kalvix.ai
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
