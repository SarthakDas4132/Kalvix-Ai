import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.brandTitle}>M-Auxis</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Terms & Conditions</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>Last Updated: July 17, 2026</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.bodyText}>
              {"Welcome to The M-Auxis AI (\"we\", \"our\", \"us\"). By accessing or using our application, website, and associated services (collectively, the \"Service\"), you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree with any part of these Terms, you must not use our Service."}
            </Text>

            <Text style={styles.sectionTitle}>1. Description of Service</Text>
            <Text style={styles.bodyText}>
              {"The M-Auxis AI provides an AI-powered content marketing platform that enables users to generate branding materials, textual content, and imagery, and schedule/publish this content directly to connected third-party social media platforms, including Meta (Facebook and Instagram)."}
            </Text>

            <Text style={styles.sectionTitle}>2. User Accounts and Third-Party Integrations</Text>
            <Text style={styles.bodyText}>
              {"• Account Responsibility: You are responsible for safeguarding your account credentials and for all activities that occur under your account.\n• Meta Integration: To utilize publishing features, you must link your Facebook and/or Instagram accounts. By doing so, you agree to comply strictly with the Meta Platform Terms and Community Standards. We reserve the right to suspend your account if your linked Meta profiles are found to be violating these terms.\n• Permissions: You grant us permission to access, store (temporarily), and transmit your Meta Page tokens and relevant media solely for the purpose of executing the publishing actions you initiate."}
            </Text>

            <Text style={styles.sectionTitle}>3. Acceptable Use Policy</Text>
            <Text style={styles.bodyText}>
              {"You agree not to use the Service to:\n• Generate, publish, or distribute content that is illegal, defamatory, harassing, abusive, obscene, or discriminatory.\n• Violate any third-party intellectual property rights, copyrights, or trademarks.\n• Automate spam, artificially inflate engagement metrics, or manipulate Meta's algorithms.\n• Generate misleading information, deepfakes, or content designed to deceive the public.\n\nFailure to adhere to this Acceptable Use Policy will result in immediate termination of your account and revocation of API access."}
            </Text>

            <Text style={styles.sectionTitle}>4. AI-Generated Content</Text>
            <Text style={styles.bodyText}>
              {"• No Guarantee of Accuracy: The Service utilizes third-party artificial intelligence models (such as Google Gemini and OpenAI). We do not guarantee the accuracy, reliability, or appropriateness of the generated content.\n• User Liability: You are solely responsible for reviewing all AI-generated text and imagery before publishing it to your social media channels. You assume all liability and responsibility for the content you choose to publish.\n• Intellectual Property of Outputs: While you own the rights to the specific inputs (Brand DNA) you provide, the generated outputs are provided \"as-is.\" You are responsible for ensuring that the generated outputs do not infringe on existing copyrights before commercial use."}
            </Text>

            <Text style={styles.sectionTitle}>5. Intellectual Property Rights</Text>
            <Text style={styles.bodyText}>
              {"Unless otherwise stated, The M-Auxis AI and its original content, features, and functionality (excluding user-generated content and third-party AI models) are and will remain the exclusive property of The M-Auxis AI and its licensors."}
            </Text>

            <Text style={styles.sectionTitle}>6. Limitation of Liability</Text>
            <Text style={styles.bodyText}>
              {"In no event shall The M-Auxis AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:\n• Loss of profits, data, use, goodwill, or other intangible losses.\n• Actions taken by Meta (e.g., shadow-banning, account suspension, or API restriction) resulting from the content you publish using our Service.\n• Errors, hallucinations, or copyright infringements present in AI-generated content."}
            </Text>

            <Text style={styles.sectionTitle}>7. Termination</Text>
            <Text style={styles.bodyText}>
              {"We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms or violate Meta's Platform Terms. Upon termination, your right to use the Service will immediately cease."}
            </Text>

            <Text style={styles.sectionTitle}>8. Changes to Terms</Text>
            <Text style={styles.bodyText}>
              {"We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by updating the \"Last Updated\" date. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes."}
            </Text>

            <Text style={styles.sectionTitle}>9. Contact Us</Text>
            <Text style={[styles.bodyText, { fontWeight: 'bold' }]}>
              {"The M-Auxis AI\nEmail: legal@m-auxis.ai\nWebsite: https://m-auxis.ai"}
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
