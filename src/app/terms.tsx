import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.brandTitle}>Kalvix.ai</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Terms & Conditions</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Effective Date: July 1, 2026</Text>
            <Text style={styles.date}>Last Updated: July 1, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.sectionTitle}>1. Introduction</Text>
            <Text style={styles.bodyText}>
              Welcome to Kalvix.ai (“Kalvix”, “Platform”, “Company”, “we”, “our”, or “us”). These Terms and Conditions (“Terms”) govern your access to and use of Kalvix.ai. By accessing or using the Platform, you agree to be legally bound by these Terms.
            </Text>

            <Text style={styles.sectionTitle}>2. Eligibility</Text>
            <Text style={styles.bodyText}>
              • You must be at least eighteen (18) years old.{"\n"}
              • If you register on behalf of a company, you confirm you have the authority to bind that entity.
            </Text>

            <Text style={styles.sectionTitle}>3. Services</Text>
            <Text style={styles.bodyText}>
              Kalvix.ai provides AI-powered marketing and business growth solutions, including:{"\n"}
              • AI Content Studio, Image/Video Generation{"\n"}
              • AI Copywriting, Caption/Hashtag Generation{"\n"}
              • Cross-Platform Publishing{"\n"}
              • Creator Marketplace & Influencer Discovery{"\n"}
              • CRM, Automation, and Analytics Dashboard
            </Text>

            <Text style={styles.sectionTitle}>4. Subscription and Billing</Text>
            <Text style={styles.bodyText}>
              Paid features require a subscription. Fees are charged in advance and renew automatically.
            </Text>

            <Text style={styles.sectionTitle}>5. AI Services</Text>
            <Text style={styles.bodyText}>
              AI-generated outputs may have errors and should not be considered professional advice.
            </Text>

            <Text style={styles.sectionTitle}>6. User Content</Text>
            <Text style={styles.bodyText}>
              You keep ownership of the content you upload, granting us a limited license to operate the services.
            </Text>

            <Text style={styles.sectionTitle}>7. Intellectual Property</Text>
            <Text style={styles.bodyText}>
              Kalvix owns all rights to its software, APIs, AI models, branding, and proprietary workflows.
            </Text>

            <Text style={styles.sectionTitle}>8. Acceptable Use</Text>
            <Text style={styles.bodyText}>
              You agree not to break laws, reverse engineer, or abuse the Platform.
            </Text>

            <Text style={styles.sectionTitle}>9. Advertising and Integrations</Text>
            <Text style={styles.bodyText}>
              Kalvix connects with third-party social and ad platforms. Kalvix is not responsible for campaign performance.
            </Text>

            <Text style={styles.sectionTitle}>10. Limitation of Liability</Text>
            <Text style={styles.bodyText}>
              Kalvix is not liable for indirect, incidental, or consequential damages.
            </Text>

            <Text style={styles.sectionTitle}>11. Governing Law</Text>
            <Text style={styles.bodyText}>
              These Terms are governed by India laws under the exclusive jurisdiction of the Pune, Maharashtra courts.
            </Text>

            <Text style={styles.sectionTitle}>12. Contact Information</Text>
            <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>
              Kalvix.ai{"\n"}
              Email: legal@kalvix.ai{"\n"}
              Registered Address: Kalvix Technologies Pvt. Ltd., Pune, Maharashtra, India{"\n"}
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
