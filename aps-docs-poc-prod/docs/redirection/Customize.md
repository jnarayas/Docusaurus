---
sidebar_position: 2
---
# Customize Redirection Page


![Redirection Page](/img/redirection.png)

:::info info
The payment page for **credit cards on Amazon** can be fully customized to align with the appearance and style of your website.
:::


## How it works

From your back-office go to the tab **`Payment Page Template`**, Click on **`Add Payment Page Template`** , You will find two options for customizing the payment page explained below:

<!-- - **Using our back-office live theme editor.** <br />
- **Uploading your own CSS or HTML template to our back-office.**  -->


:::caution Notice
The payment page customization is possible only in **Credit Card Page** , the other payment options allowed on Redirection channel are not customizable like **SADAD , KNET , Installments Standalone and NAPS**. 
:::

## Option 1: Using our Back-office theme editor
We have added a **full online editor** on the back-office to simplify the CSS customization and change the look and feel **without any `coding`** , also your changes could be checked on the same tab **customize** .<br />

:::info info
This option allows you to change the following : [**Primary color**] - [ **Secondary color** ] - [**Background Color**]
:::

:::tip tip
here is an example using the back-office live editor.
:::

![Redirection Page](/img/customize.png)


## Option 2: Uploading your own CSS or HTML template:

 If you want to have more control on the payment page design and add more edits , you have two options.

### 1: CSS Theme :
Create a CSS theme by modifying the colors and overall design of the payment page. Inspect the elements of the payment page and edit the existing CSS values accordingly. Save your changes to a separate CSS file and **upload it to our back-office**.

:::tip tip
Download a sample CSS file to try it out : <a href='' target="_blank">**Sample Redirection CSS file**</a>
:::


### 2: HTML Template:

You can implement your own HTML file that you want to load in the payment page to change the look and feel for the payment page as you wish and **upload it to our back-office**.

:::danger Reminder
The **scripts** aren't allowed in the templates.
:::

:::info info
in order to inject our payment page inside your HTML template you must include this div → **`<div>$$PZ$$</div>`** within your HTML template.
:::


```markup title='Implementation Example' showLineNumbers
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Example</title>
</head>
<body>
    <header>your HTML element such as header.</header>
    // highlight-start
         <div>$$PZ$$</div> <!-- here where our payment page will be injected -->
    // highlight-end
    <footer>your HTML element such as footer.</footer>
</body>
</html>
```

:::tip tip
Download a sample HTML file to try it out: <a href='' target="_blank">**Sample Redirection HTML file**</a>
:::


## Customizing the loading page

:::info info
you can also customize the **Loading Page** by following the **[same steps above](#html-template)**.
:::
