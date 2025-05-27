import React from 'react';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Billing Details */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Billing details</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Company Name (Optional)</label>
              <input type="text" placeholder="Company Name (Optional)" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Country / Region</label>
              <select className="border p-2 rounded w-full">
                <option>Sri Lanka</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Street address</label>
              <input type="text" placeholder="Street address" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Town / City</label>
              <input type="text" placeholder="Town / City" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Province</label>
              <select className="border p-2 rounded w-full">
                <option>Western Province</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ZIP code</label>
              <input type="text" placeholder="ZIP code" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email address</label>
              <input type="email" placeholder="Email address" className="border p-2 rounded w-full" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Additional information</label>
              <textarea placeholder="Additional information" className="border p-2 rounded w-full" />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="p-8 space-y-5 border rounded">
            <div className="flex justify-between font-semibold">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="flex justify-between">
              <span>Asgaard sofa × 1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-bold text-orange-600">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <div>
              <label className="flex items-start gap-2">
                <input type="radio" name="payment" defaultChecked />
                <div>
                  <span className="font-medium">Direct Bank Transfer</span>
                  <p className="text-sm text-gray-600">
                    Make your payment directly into our bank account. Use your Order ID as the payment reference. Order ships once funds are cleared.
                  </p>
                </div>
              </label>
            </div>
            <label className="flex items-center gap-2 text-gray-400">
              <input type="radio" name="payment" disabled />
              Direct Bank Transfer
            </label>
            <label className="flex items-center gap-2 text-gray-400">
              <input type="radio" name="payment" disabled />
              Cash On Delivery
            </label>
          </div>

          <p className="text-sm text-gray-500">
            Your personal data will be used to support your experience on this website, to manage access to your account, and for other purposes
            described in our <span className="text-black font-medium">privacy policy</span>.
          </p>

          <button className="w-60 bg-white  border-black border text-2xl text-[rgba(0, 0, 0, 1)] py-4 rounded-lg hover:bg-gray-100 transition mx-auto block">
  Place order
</button>

        </div>
      </div>
    </div>
  );
}
