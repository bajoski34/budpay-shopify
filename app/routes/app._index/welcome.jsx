import {
  Text,
  BlockStack,
  CalloutCard,
  Link,
} from "@shopify/polaris";

export default function Welcome() {
  return (
    <CalloutCard
      title="Budpay Payments 💸 🎉"
      illustration=""
      primaryAction={{
        content: "Dashboard",
        url: "dashboard"
      }}
    >
      <BlockStack gap="2">
        <Text as="p">
          Easily make collection via Budpay. your keys cane be found on your {" "}
          <Link url="https://shopify.dev/docs/api/payments-apps" target="_blank">
          Merchant Dashboard
          </Link>
        </Text>
      </BlockStack>
    </CalloutCard>
  )
}