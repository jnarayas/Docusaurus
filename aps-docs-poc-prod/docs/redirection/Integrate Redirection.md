---
sidebar_position: 1
---

<!-- import ReactPlayer from 'react-player' -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Let's discover **Redirection in less than 10 minutes**.

## What is redirection?

Compared to merchant page integration, redirection integration involves a redirection step to a separate website. Consider redirection if you have a unique use case or technical barrier, or if you want to make minimal changes to your site code. Otherwise we recommend standard merchant page integration for a better customer experience.

:::info 
Check the **[Integration options](https://paymentservices.amazon.com/docs/EN/22.html)** guide to learn more.

:::


## Redirection URLs

<!-- :::info info
**Test Environment URL:** https://sbcheckout.payfort.com/FortAPI/paymentPage <br></br>
**Production Environment URL:** https://checkout.payfort.com/FortAPI/
::: -->
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since `POST`

<Tabs className="unique-tabs">
<TabItem value="1" label="Live">

:::tip **Live Environment URL:** 

```
https://checkout.payfort.com/FortAPI/
```
:::

</TabItem>
<TabItem value="2" label="Sandbox">

:::tip **Sandbox Environment URL:** 

```markup
https://sbcheckout.payfort.com/FortAPI/paymentPage
```
:::

</TabItem>
</Tabs>


<!-- :::info info
**Production Environment URL:**
https://checkout.payfort.com/FortAPI/paymentPage
::: -->


## Request type
:::info
**HTTPs Form `POST` Request.** 
```markup
<form method="post" action="https://sbcheckout.payfort.com/FortAPI/paymentPage"
id="form1" name="form1"></form>
```
:::






<!-- <Tabs className="unique-tabs">
<TabItem value="form" label="Form">



</TabItem>
<TabItem value="json" label="JSON">

</TabItem>
</Tabs> -->



<!-- :::info **HTTPs Form `POST` Request.** 

```markup
<form method="post" action="https://sbcheckout.payfort.com/FortAPI/paymentPage"
id="form1" name="form1"></form>
```
::: -->


## Request example


Check the below **`Authorization/Purchase`** request examples.

<Tabs className="unique-tabs">

<TabItem value="html" label="HTML">

```markup 
<form method="post" action="https://sbcheckout.payfort.com/FortAPI/paymentPage" 
id="form1" name="form1">
    <input type="hidden" name="signature" value="" />
    <input type="hidden" name="command" value="PURCHASE" />
    <input type="hidden" name="merchant_reference" value="" />
    <input type="hidden" name="amount" value="" />
    <input type="hidden" name="access_code" value="" />
    <input type="hidden" name="merchant_identifier" value="" />
    <input type="hidden" name="currency" value="" />
    <input type="hidden" name="language" value="" />
    <input type="hidden" name="customer_email" value="" />
    <input type="hidden" name="return_url" value="" />
    <input type="submit" value="" id="" name="" />
</form>
```


</TabItem>

<TabItem value="py" label="Python">

```py
import cgi

requestParams = {
    'command': 'AUTHORIZATION',
    'access_code': 'zx0IPmPy5jp1vAz8Kpg7',
    'merchant_identifier': 'CycHZxVj',
    'merchant_reference': 'XYZ9239-yu898',
    'amount': '10000',
    'currency': 'AED',
    'language': 'en',
    'customer_email': 'test@payfort.com',
    'signature': '7cad05f0212ed933c9a5d5dffa31661acf2c827a',
    'order_description': 'iPhone 6-S',
}

redirectUrl = 'https://sbcheckout.payfort.com/FortAPI/paymentPage'

print("<html xmlns='https://www.w3.org/1999/xhtml'>\n<head></head>\n<body>\n")
print(f"<form action='{redirectUrl}' method='post' name='frm'>\n")
for slug, title in requestParams.items():
    print(f"\t<input type='hidden' name='{cgi.escape(slug)}' value='{cgi.escape(title)}'>\n")
print("</form>\n")
print("\t<script type='text/javascript'>\n")
print("\t\tdocument.frm.submit();\n")
print("\t</script>\n")
print("</body>\n</html>\n")

```

</TabItem>
<TabItem value="php" label="PHP">

```php
$requestParams = array(
    'command' => 'AUTHORIZATION',
    'access_code' => 'zx0IPmPy5jp1vAz8Kpg7',
    'merchant_identifier' => 'CycHZxVj',
    'merchant_reference' => 'XYZ9239-yu898',
    'amount' => '10000',
    'currency' => 'AED',
    'language' => 'en',
    'customer_email' => 'test@payfort.com',
    'signature' => '7cad05f0212ed933c9a5d5dffa31661acf2c827a',
    'order_description' => 'iPhone 6-S'
);

$redirectUrl = 'https://sbcheckout.payfort.com/FortAPI/paymentPage';

echo "<html xmlns='https://www.w3.org/1999/xhtml'>\n<head></head>\n<body>\n";
echo "<form action='$redirectUrl' method='post' name='frm'>\n";

foreach ($requestParams as $a => $b) {
    echo "\t<input type='hidden' name='".htmlentities($a)."' value='".htmlentities($b)."'>\n";
}

echo "\t<script type='text/javascript'>\n";
echo "\t\tdocument.frm.submit();\n";
echo "\t</script>\n";

echo "</form>\n</body>\n</html>";

```

</TabItem>
<TabItem value="ruby" label="Ruby">

```rb
require 'cgi'

requestParams = {
  'command' => 'AUTHORIZATION',
  'access_code' => 'zx0IPmPy5jp1vAz8Kpg7',
  'merchant_identifier' => 'CycHZxVj',
  'merchant_reference' => 'XYZ9239-yu898',
  'amount' => '10000',
  'currency' => 'AED',
  'language' => 'en',
  'customer_email' => 'test@payfort.com',
  'signature' => '7cad05f0212ed933c9a5d5dffa31661acf2c827a',
  'order_description' => 'iPhone 6-S',
}

requestParams.each {|key, value| 
  puts key + value;
}

redirectUrl = 'https://sbcheckout.payfort.com/FortAPI/paymentPage';

puts "<html xmlns='https://www.w3.org/1999/xhtml'>\n<head></head>\n<body>\n";
puts "<form action='redirectUrl' method='post' name='frm'>\n";

requestParams.each {|key, value|
  puts "\t<input type='hidden' name='" + CGI.escapeHTML(key) + "' value='" + CGI.escapeHTML(value) + "'>\n";
}

puts "</form>\n";
puts "\t<script type='text/javascript'>\n";
puts "\t\tdocument.frm.submit();\n";
puts "\t</script>\n";
puts "</body>\n</html>";

```
</TabItem>
<TabItem value="react" label="ReactJS">

![test](/img/sample.svg)

</TabItem>



</Tabs>

<!-- ![test](/img/sample.svg) -->


:::caution important
For submission of the redirection request, it is **Mandatory** to use an **`HTTPS POST`** form request. Once submitted, you will be redirected to our payment gateway to enter your payment details.
:::

:::tip
**Include the following `parameters` in the `request` you will send to Amazon Payment Services**
:::


<Tabs className="unique-tabs">
<TabItem value="required" label="Required">

Parameter     | Type | Description / Example
------------- | ---- | ---------
`command` | Alpha <br /> max: 20 | A command. Please refer to this <a href="#">section</a> to know more about the differences. <br /> Possible/ expected values: `AUTHORIZATION` / `PURCHASE`. <br /> |
`access_code` | Alphanumeric <br /> max: 20  | Access code. <br /> Example: `zx0IPmPy5jp1vAz8Kpg7` |
`merchant_identifier` | Alphanumeric <br /> max: 20   | The ID of the Merchant. <br /> Example: `CycHZxVj` |
`merchant_reference`  | Alphanumeric <br /> max: 40   | The Merchant’s unique order number. <br /> Example: `XYZ9239-yu898`  Special characters: [ `- _ .` ]|
`amount` | Numeric <br /> max: 10   | The transaction's amount. *Each currency has **predefined allowed decimal points** that should be taken into consideration when sending the amount check the note after this table. <br /> Example: `10000` |
`currency` | Alpha <br /> max: 3   | The currency of the transaction’s amount in **ISO code 3**. <br /> Example: `AED` |
`language` | Alpha <br /> max: 2   | The checkout page and messages language. <br /> Possible/ expected values: `en` / `ar` |
`customer_email` | Alphanumeric <br /> max: 254   | The customer's email. <br /> Example: `customer1@domain.com`  Special characters: [ `_ - . @ +` ] |
`signature` |Alphanumeric <br /> max: 200 | A string hashed using the Secure Hash Algorithm. Please refer to section <a href="#signature" target='_blank'>Signature</a> <br /> Example: `7cad05f0212ed933c9a5d5dffa31661acf2c827a` |

</TabItem>
<TabItem value="optional" label="Optional">

ATTRIBUTES     | Description
-------------- | ---------
**token_name** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 100   | The Token received from the Tokenization process. <br></br> Example: Op9Vmp <br></br> Special characters: . @ - _ |
**payment_option** <br></br> Alpha <br></br> Optional <br></br> Max: 10   | Payment option. <br></br> Possible/ expected values:<br></br> - MASTERCARD<br></br> - VISA<br></br> - AMEX<br></br> - SADAD (for Purchase operations only)<br></br> - NAPS (for Purchase operations only)<br></br> - KNET(for Purchase operations only)<br></br> - OMANNET (for Purchase operations and eci Ecommerce only)<br></br> - BENEFIT (for Purchase operations and eci Ecommerce only)<br></br> - MADA (for Purchase operations and eci Ecommerce only) Click here to download <a href='' target="_blank">MADA Branding Document</a><br></br> - MEEZA (for Purchase operations and ECOMMERCE eci only) |
**sadad_olp** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 12 | SADAD Online Payment ID Alias. The merchant sends this value if the OLP ID is collected on the merchant checkout.<br></br> Example: SABBP2P_UAT2 <br></br> Special characters: @ . _  |
**eci** <br></br> Alpha <br></br> Optional <br></br> Max: 16   | E-commerce indicator. *MOTO and E-commerce indicator clickable in VISA, MASTERCARD and AMEX.<br></br> Possible/ expected values:<br></br> - ECOMMERCE<br></br> - MOTO|
**order_description** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 150   | It holds the description of the order. <br></br> Example: iPhone 6-S <br></br> Special characters: <code> ' </code> / . _ - # : $ **Space**   |
**customer_ip** <br></br> Alphanumeric <br></br> Optional <br></br> max: 45 | It holds the customer's IP address. *We support IPv4 and IPv6 as shown in the example below.<br></br> Example:<br></br> IPv4 → 192.178.1.10<br></br> IPv6 → 2001:0db8:3042:0002:5a55:caff:fef6:bdbf <br></br> Special characters: . : |
**customer_name** <br></br> Alpha <br></br> Optional <br></br> Max: 40   | The customer's name. <br></br> Example: John Smith <br></br> Special characters: _ \ / - . <code> ' </code> **Space**|
**merchant_extra** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 999   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra1** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra2** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra3** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra4** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra5** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**remember_me** <br></br> Alpha <br></br> Optional <br></br> Max: 2  | This parameter provides you with an indication to whether to save this token for the user based on the user selection. <br></br> Possible/ expected values: NO |
**phone_number** <br></br> Alphanumeric <br></br> Optional <br></br> max: 19 | The customer's phone number. <br></br> Example: 00962797219966 <br></br> Special characters: + - ( ) **Space** |
**settlement_reference** <br></br> Alphanumeric <br></br> Optional <br></br> max: 34 | The Merchant submits unique value to Amazon Payment Services. The value is then passed to the  Acquiring bank and displayed to the merchant in the Acquirer settlement file. <br></br> Example: XYZ9239-yu898 <br></br> Special characters: - _ .|
**return_url** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 400   | The URL of the Merchant's page that will be displayed to the customer when the order is processed. <br></br> Example: https://www.merchant.com <br></br> Special characters: $ ! = ? # & - _ / : .   |
**billing_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AMMAN <br></br>Example2: TALFILAH
**billing_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AM <br></br>Example2: AT
**billing_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**billing_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**billing_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**billing_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**billing_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**billing_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**shipping_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.
**shipping_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.
**shipping_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**shipping_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**shipping_source** <br></br> Alphanumeric <br></br> Optional <br></br> | How you obtained the shipping address. <br></br> Possible/ expected values: NEW_ADDRESS, ADDRESS_ON_FILE <br></br> |
**shipping_sameAsBilling** <br></br> Alphanumeric <br></br> Optional <br></br> | Indicates whether the shipping address provided is the same as the payer's billing address. Provide this value if you are not providing the full shipping and billing addresses, but you can affirm that they are the same or different. <br></br> Possible/ expected values: DIFFERENT, SAME, UNKNOWN <br></br> |
**shipping_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**shipping_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**shipping_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**shipping_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**agreement_id** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | identifier for the agreement with the payer to process payments to be used in recurring payments<br></br><b>( Required for MADA )</b>
**recurring_mode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | Indicates if the subsequent payments within the agreement has same/different amount or unscheduled (unknown interval/amount).<br></br><b>( Required for MADA )</b><br></br>Possible/ expected values: UNSCHEDULED, VARIABLE, FIXED <br></br>|
**recurring_transactions_count** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The number of merchant-initiated payments within the recurring payment agreement.<br></br><b>( Required for MADA and only if recurring_mode = VARIABLE or FIXED )</b>

</TabItem>
</Tabs>


<details><summary>More Parameters - Optional</summary>

ATTRIBUTES     | Description
-------------- | ---------
**token_name** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 100   | The Token received from the Tokenization process. <br></br> Example: Op9Vmp <br></br> Special characters: . @ - _ |
**payment_option** <br></br> Alpha <br></br> Optional <br></br> Max: 10   | Payment option. <br></br> Possible/ expected values:<br></br> - MASTERCARD<br></br> - VISA<br></br> - AMEX<br></br> - SADAD (for Purchase operations only)<br></br> - NAPS (for Purchase operations only)<br></br> - KNET(for Purchase operations only)<br></br> - OMANNET (for Purchase operations and eci Ecommerce only)<br></br> - BENEFIT (for Purchase operations and eci Ecommerce only)<br></br> - MADA (for Purchase operations and eci Ecommerce only) Click here to download <a href='' target="_blank">MADA Branding Document</a><br></br> - MEEZA (for Purchase operations and ECOMMERCE eci only) |
**sadad_olp** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 12 | SADAD Online Payment ID Alias. The merchant sends this value if the OLP ID is collected on the merchant checkout.<br></br> Example: SABBP2P_UAT2 <br></br> Special characters: @ . _  |
**eci** <br></br> Alpha <br></br> Optional <br></br> Max: 16   | E-commerce indicator. *MOTO and E-commerce indicator clickable in VISA, MASTERCARD and AMEX.<br></br> Possible/ expected values:<br></br> - ECOMMERCE<br></br> - MOTO|
**order_description** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 150   | It holds the description of the order. <br></br> Example: iPhone 6-S <br></br> Special characters: <code> ' </code> / . _ - # : $ **Space**   |
**customer_ip** <br></br> Alphanumeric <br></br> Optional <br></br> max: 45 | It holds the customer's IP address. *We support IPv4 and IPv6 as shown in the example below.<br></br> Example:<br></br> IPv4 → 192.178.1.10<br></br> IPv6 → 2001:0db8:3042:0002:5a55:caff:fef6:bdbf <br></br> Special characters: . : |
**customer_name** <br></br> Alpha <br></br> Optional <br></br> Max: 40   | The customer's name. <br></br> Example: John Smith <br></br> Special characters: _ \ / - . <code> ' </code> **Space**|
**merchant_extra** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 999   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra1** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra2** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra3** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra4** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra5** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**remember_me** <br></br> Alpha <br></br> Optional <br></br> Max: 2  | This parameter provides you with an indication to whether to save this token for the user based on the user selection. <br></br> Possible/ expected values: NO |
**phone_number** <br></br> Alphanumeric <br></br> Optional <br></br> max: 19 | The customer's phone number. <br></br> Example: 00962797219966 <br></br> Special characters: + - ( ) **Space** |
**settlement_reference** <br></br> Alphanumeric <br></br> Optional <br></br> max: 34 | The Merchant submits unique value to Amazon Payment Services. The value is then passed to the  Acquiring bank and displayed to the merchant in the Acquirer settlement file. <br></br> Example: XYZ9239-yu898 <br></br> Special characters: - _ .|
**return_url** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 400   | The URL of the Merchant's page that will be displayed to the customer when the order is processed. <br></br> Example: https://www.merchant.com <br></br> Special characters: $ ! = ? # & - _ / : .   |
**billing_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AMMAN <br></br>Example2: TALFILAH
**billing_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AM <br></br>Example2: AT
**billing_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**billing_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**billing_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**billing_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**billing_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**billing_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**shipping_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.
**shipping_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.
**shipping_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**shipping_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**shipping_source** <br></br> Alphanumeric <br></br> Optional <br></br> | How you obtained the shipping address. <br></br> Possible/ expected values: NEW_ADDRESS, ADDRESS_ON_FILE <br></br> |
**shipping_sameAsBilling** <br></br> Alphanumeric <br></br> Optional <br></br> | Indicates whether the shipping address provided is the same as the payer's billing address. Provide this value if you are not providing the full shipping and billing addresses, but you can affirm that they are the same or different. <br></br> Possible/ expected values: DIFFERENT, SAME, UNKNOWN <br></br> |
**shipping_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**shipping_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**shipping_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**shipping_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**agreement_id** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | identifier for the agreement with the payer to process payments to be used in recurring payments<br></br><b>( Required for MADA )</b>
**recurring_mode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | Indicates if the subsequent payments within the agreement has same/different amount or unscheduled (unknown interval/amount).<br></br><b>( Required for MADA )</b><br></br>Possible/ expected values: UNSCHEDULED, VARIABLE, FIXED <br></br>|
**recurring_transactions_count** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The number of merchant-initiated payments within the recurring payment agreement.<br></br><b>( Required for MADA and only if recurring_mode = VARIABLE or FIXED )</b>

</details>


:::danger important
Note: Before sending the **`amount`** parameter value of any transaction, you have to **multiply the value with the currency decimal code** according to [**ISO code 3**](https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(List_One)).<br></br>
:::

:::tip Examples
If the amount value was **500 AED** according to ISO code 3, you should **multiply** the value with 100 (2 decimal points); so it will be sent in the request as **50000**.
:::





## Response example

<!-- :::info
**`Authorization/Purchase`** response example.
::: -->




```json title='Json'
{
  "command": "AUTHORIZATION",
  "access_code": "zx0IPmPy5jp1vAz8Kpg7",
  "merchant_identifier": "CycHZxVj",
  "merchant_reference": "XYZ9239-yu898",
  "amount": "10000",
  "currency": "AED",
  "language": "en",
  "customer_email": "test@payfort.com",
  "signature": "7cad05f0212ed933c9a5d5dffa31661acf2c827a",
  "fort_id": "149295435400084008",
  "payment_option": "VISA",
  "eci": "ECOMMERCE",
  "order_description": "iPhone6-S",
  "customer_ip": "192.178.1.10",
  "customer_name": "John",
  "response_message": "Success",
  "response_code": "20064",
  "status": "04",
  "card_holder_name": "John Smith",
  "expiry_date": "2105",
  "card_number": "400555******0001"
}
```

:::info info
**The following `parameters` will be returned in Amazon Payment Services `response`:**
:::


<Tabs className="unique-tabs">
<TabItem value="required" label="Required">

Parameter     | Type | Description / Example
------------- | ---- | ---------
`command` | Alpha <br /> max: 20 | A command. Please refer to this <a href="#">section</a> to know more about the differences. <br /> Possible/ expected values: `AUTHORIZATION` / `PURCHASE`. <br /> |
`access_code` | Alphanumeric <br /> max: 20  | Access code. <br /> Example: `zx0IPmPy5jp1vAz8Kpg7` |
`merchant_identifier` | Alphanumeric <br /> max: 20   | The ID of the Merchant. <br /> Example: `CycHZxVj` |
`merchant_reference`  | Alphanumeric <br /> max: 40   | The Merchant’s unique order number. <br /> Example: `XYZ9239-yu898`  Special characters: [ `- _ .` ]|
`amount` | Numeric <br /> max: 10   | The transaction's amount. *Each currency has **predefined allowed decimal points** that should be taken into consideration when sending the amount check the note after this table. <br /> Example: `10000` |
`currency` | Alpha <br /> max: 3   | The currency of the transaction’s amount in **ISO code 3**. <br /> Example: `AED` |
`language` | Alpha <br /> max: 2   | The checkout page and messages language. <br /> Possible/ expected values: `en` / `ar` |
`customer_email` | Alphanumeric <br /> max: 254   | The customer's email. <br /> Example: `customer1@domain.com`  Special characters: [ `_ - . @ +` ] |
`signature` |Alphanumeric <br /> max: 200 | A string hashed using the Secure Hash Algorithm. Please refer to section <a href="#signature" target='_blank'>Signature</a> <br /> Example: `7cad05f0212ed933c9a5d5dffa31661acf2c827a` |

</TabItem>
<TabItem value="optional" label="Optional">

ATTRIBUTES     | Description
-------------- | ---------
**token_name** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 100   | The Token received from the Tokenization process. <br></br> Example: Op9Vmp <br></br> Special characters: . @ - _ |
**payment_option** <br></br> Alpha <br></br> Optional <br></br> Max: 10   | Payment option. <br></br> Possible/ expected values:<br></br> - MASTERCARD<br></br> - VISA<br></br> - AMEX<br></br> - SADAD (for Purchase operations only)<br></br> - NAPS (for Purchase operations only)<br></br> - KNET(for Purchase operations only)<br></br> - OMANNET (for Purchase operations and eci Ecommerce only)<br></br> - BENEFIT (for Purchase operations and eci Ecommerce only)<br></br> - MADA (for Purchase operations and eci Ecommerce only) Click here to download <a href='' target="_blank">MADA Branding Document</a><br></br> - MEEZA (for Purchase operations and ECOMMERCE eci only) |
**sadad_olp** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 12 | SADAD Online Payment ID Alias. The merchant sends this value if the OLP ID is collected on the merchant checkout.<br></br> Example: SABBP2P_UAT2 <br></br> Special characters: @ . _  |
**eci** <br></br> Alpha <br></br> Optional <br></br> Max: 16   | E-commerce indicator. *MOTO and E-commerce indicator clickable in VISA, MASTERCARD and AMEX.<br></br> Possible/ expected values:<br></br> - ECOMMERCE<br></br> - MOTO|
**order_description** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 150   | It holds the description of the order. <br></br> Example: iPhone 6-S <br></br> Special characters: <code> ' </code> / . _ - # : $ **Space**   |
**customer_ip** <br></br> Alphanumeric <br></br> Optional <br></br> max: 45 | It holds the customer's IP address. *We support IPv4 and IPv6 as shown in the example below.<br></br> Example:<br></br> IPv4 → 192.178.1.10<br></br> IPv6 → 2001:0db8:3042:0002:5a55:caff:fef6:bdbf <br></br> Special characters: . : |
**customer_name** <br></br> Alpha <br></br> Optional <br></br> Max: 40   | The customer's name. <br></br> Example: John Smith <br></br> Special characters: _ \ / - . <code> ' </code> **Space**|
**merchant_extra** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 999   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra1** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra2** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra3** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra4** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**merchant_extra5** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 250   | Extra data sent by merchant. Will be received and sent back as received. Will not be displayed in any report. <br></br> Example: JohnSmith <br></br> Special characters: . ; / _ - , <code> ' </code> @|
**remember_me** <br></br> Alpha <br></br> Optional <br></br> Max: 2  | This parameter provides you with an indication to whether to save this token for the user based on the user selection. <br></br> Possible/ expected values: NO |
**phone_number** <br></br> Alphanumeric <br></br> Optional <br></br> max: 19 | The customer's phone number. <br></br> Example: 00962797219966 <br></br> Special characters: + - ( ) **Space** |
**settlement_reference** <br></br> Alphanumeric <br></br> Optional <br></br> max: 34 | The Merchant submits unique value to Amazon Payment Services. The value is then passed to the  Acquiring bank and displayed to the merchant in the Acquirer settlement file. <br></br> Example: XYZ9239-yu898 <br></br> Special characters: - _ .|
**return_url** <br></br> Alphanumeric <br></br> Optional <br></br> Max: 400   | The URL of the Merchant's page that will be displayed to the customer when the order is processed. <br></br> Example: https://www.merchant.com <br></br> Special characters: $ ! = ? # & - _ / : .   |
**billing_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AMMAN <br></br>Example2: TALFILAH
**billing_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.<br></br>Reference: <a href='https://en.wikipedia.org/wiki/ISO_3166-2' target="_blank">ISO_3166-2</a>  <br></br>Example1: AM <br></br>Example2: AT
**billing_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**billing_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**billing_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**billing_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**billing_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**billing_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**shipping_stateProvince** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | The state or province of the address.
**shipping_provinceCode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 3 | The three character ISO 3166-2 country subdivision code for the state or province of the address. Providing this field might improve your payer experience for 3-D Secure payer authentication.
**shipping_street** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The first line of the address. For example, this may be the street name and number, or the Post Office Box details.
**shipping_street2** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The second line of the address (if provided).
**shipping_source** <br></br> Alphanumeric <br></br> Optional <br></br> | How you obtained the shipping address. <br></br> Possible/ expected values: NEW_ADDRESS, ADDRESS_ON_FILE <br></br> |
**shipping_sameAsBilling** <br></br> Alphanumeric <br></br> Optional <br></br> | Indicates whether the shipping address provided is the same as the payer's billing address. Provide this value if you are not providing the full shipping and billing addresses, but you can affirm that they are the same or different. <br></br> Possible/ expected values: DIFFERENT, SAME, UNKNOWN <br></br> |
**shipping_postcode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 10 | The post code or zip code of the address.
**shipping_country** <br></br> Alphanumeric <br></br> Optional <br></br> min:3, max: 3 | The 3 letter ISO standard Alphanumeric country code of the address.
**shipping_company** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The name of the company associated with this address.
**shipping_city** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The city portion of the address.
**agreement_id** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | identifier for the agreement with the payer to process payments to be used in recurring payments<br></br><b>( Required for MADA )</b>
**recurring_mode** <br></br> Alphanumeric <br></br> Optional <br></br> max: 20 | Indicates if the subsequent payments within the agreement has same/different amount or unscheduled (unknown interval/amount).<br></br><b>( Required for MADA )</b><br></br>Possible/ expected values: UNSCHEDULED, VARIABLE, FIXED <br></br>|
**recurring_transactions_count** <br></br> Alphanumeric <br></br> Optional <br></br> max: 100 | The number of merchant-initiated payments within the recurring payment agreement.<br></br><b>( Required for MADA and only if recurring_mode = VARIABLE or FIXED )</b>

</TabItem>
</Tabs>

:::info
Every **`parameter`** the merchant sends in the **`request`** should be received by the merchant in the **`response`** even the optional ones.
:::

:::tip
Please refer to section <a href="#transactions-response-codes" target='_blank'>Transactions Response Codes</a> for more details about operation's statuses.
:::



   
      

## Using `Safe` service (tokenization) with redirection

**The Safe service is integrated in the Redirection Channel through the below steps:**

**1.** Your customer enables the `remember_me` option displayed in the payment page.<br></br>
**2.** You process a first `PURCHASE/ AUTHORIZATION` payment successfully.<br></br>
**3.** You receive a `token_name` in the response. This `token_name` is the permanent token name, and it can be used in the future for the customer’s payments by submitting the `token_name` in the next `PURCHASE/ AUTHORIZATION` payment.<br></br>

:::note Note
If your customer wants to update or delete their card you can accommodate their request – check the  <a href="#update-token-service" target='_blank'>Update Token</a> section.  

:::

:::info info
 Please refer to section <a href="#tokenization-service" target='_blank'>Safe (Tokenization) Service</a> for more details about the token name parameter.
:::


:::tip Question:
Was this helpful?&nbsp; **Yes** &nbsp;**No**
:::









<!-- - `src/pages/index.js` → `localhost:3000/`

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).


- **versioning**
- Modify your site configuration with [`docusaurus.config.js`](https://docusaurus.io/docs/api/docusaurus-config) -->

