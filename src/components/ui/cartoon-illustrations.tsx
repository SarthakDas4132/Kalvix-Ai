import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FallbackProps {
  size?: number;
  label?: string;
}

function FallbackIllustration({ size = 180, label = 'Illustration' }: FallbackProps) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

export const DeliveryIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Delivery" />;
export const PricingIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Pricing" />;
export const UnderOneRoofIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Under One Roof" />;
export const CreativeSparksIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Creative Sparks" />;
export const DesignDeliversIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Design Delivers" />;
export const AdaptableIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Adaptable" />;
export const HumanCenteredIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Human Centered" />;
export const GlobalVisionIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Global Vision" />;
export const ProcessStep1Illustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Process Step 1" />;
export const ProcessStep2Illustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Process Step 2" />;
export const ProcessStep3Illustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Process Step 3" />;
export const ProcessStep4Illustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="Process Step 4" />;
export const FooterIllustration = (props: { size?: number }) => <FallbackIllustration size={props.size} label="LET'S GO Button" />;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fae0be',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#181a12',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
    color: '#181a12',
  },
});
