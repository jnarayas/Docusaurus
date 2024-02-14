---
sidebar_position: 1
---

# Geting started

:::note
Throughout the API reference you will notice the words **(PayFort** and **FORT)**. Both refer to **Amazon Payment Services**.
:::

:::tip
Read more about how [**PayFort evolved into → Amazon Payment Services**](https://paymentservices.amazon.com/docs/EN/13.html)
:::

## Before you begin follow these steps:

### 1: Obtain a Test Account.
To access the test environment and simulate transactions, you need to obtain a test account. **To request access**, please reach out to **merchantsupport-ps@amazon.com**. This will allow you to fully test and process simulation transactions.

### 2: Choose the appropriate integration type.
Before building the integration, take a moment to **choose an integration type** that suits your use case. You can read more about integration options in our [**API documentation**](https://paymentservices.amazon.com/docs/EN/22.html). 


:::caution important
Ensure that you are selecting and using the appropriate **`parameters`** in the **API calls as per the required integration type.**

:::
:::tip
All mandatory parameters are mentioned in every section in the API reference.
:::


### 3: Create the transaction request.
Processing a valid API request **depends on specifying the right transaction parameters**. Check the documentation and read every parameter’s range of possible values to reduce errors during transaction processing.

### 4: Process the transaction response.
After each payment is processed, Amazon Payment Services returns the transaction’s response on the URL configured in your account under Technical Settings channel configuration.<br></br>


You can find more details in the API documentation section [Transaction Feedback Implementation.](#transaction-feedback-implementation")

You need to validate the response parameters returned on this URL by calculating the [signature](#signature) for the response parameters using the SHA Response Phrase configured in your account under Security Settings.

:::info 
Note that Amazon Payment Services only accepts **`HTTPS`** URLs in your Account Technical Settings, and the **`return_url`** parameter supports only the **`POST`** method under your Technical Settings. 

---
Ensure that your redirection or return_url handles the response as a POST Method. If you require further assistance, please contact **integration-ps@amazon.com.**

:::


### 5: Test and Go-Live.

To **verify that your integration is properly implemented** before going live, You can use our [**testing payment card**](https://paymentservices.amazon.com/docs/EN/12.html) numbers to test your integration and simulate your test cases.

:::danger IMPORTANT 
Testing your integration is **crucial** as it helps in verifying the integration and ensuring that there are no errors.
:::

**Once you have successfully tested your integration, you can proceed with going live.**


:::tip Question:
Was this page helpful?&nbsp; **Yes** &nbsp;**No**
:::