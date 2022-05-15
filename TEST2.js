export default {
    data() {},
    methods: {
      setupRazorpayOrder(orderId, amount) {
        let options = {
          key: this.razorpayKeyId,
          amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Bounipun Ecom",
          description: "Transaction",
          image: "https://example.com/your_logo",
          order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          prefill: {
            name: firstName + " " + surName,
            email: email,
            contact: mobileNumber,
          },
          theme: {
            color: "#3399cc",
          },
          handler: async (response) => {
            console.log(response);
  
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
              response;
  
            /* complete checkout routine */
            const completeCheckout = await this.$post("/razorpayPaymentSuccess", {
              razorpay_order_id,
              transactionId: razorpay_payment_id,
            });
  
            if (completeCheckout.resolved === false) {
              return;
            }
  
            /* move to order placed page */
            this.$store.dispatch("customer/fetchCart");
            this.$router.push("/order-placed-successfully");
          },
        };
      },
    },
  };
  