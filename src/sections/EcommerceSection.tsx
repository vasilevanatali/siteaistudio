import { useState } from "react";
import { ShoppingCart, Heart, Star, ChevronRight, Minus, Plus, Share2, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

export default function EcommerceSection() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('m');
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SectionWrapper 
      title="E-commerce Elements" 
      description="Components tailored for online stores, including product cards, galleries, and cart interactions."
    >
      <ComponentBlock title="Product Details Page" className="p-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
          {/* Product Gallery */}
          <div className="p-6 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50 flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200">
              <img 
                src="https://picsum.photos/seed/sneakers/800/800" 
                alt="Product Main" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm"
              >
                <Heart className={cn("w-5 h-5 transition-colors", isLiked && "fill-red-500 text-red-500")} />
              </button>
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
                  Bestseller
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className={cn(
                  "aspect-square rounded-xl overflow-hidden border-2 transition-all",
                  i === 1 ? "border-primary-500 ring-2 ring-primary-500/20" : "border-transparent hover:border-slate-300"
                )}>
                  <img 
                    src={`https://picsum.photos/seed/sneakers${i}/200/200`} 
                    alt={`Thumbnail ${i}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 lg:p-12 flex flex-col">
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <a href="#" className="hover:text-slate-900 transition-colors">Men</a>
              <ChevronRight className="w-4 h-4" />
              <a href="#" className="hover:text-slate-900 transition-colors">Shoes</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 font-medium">Running</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              UltraBoost Performance Pro
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4", i < 4 ? "text-amber-400 fill-amber-400" : "text-slate-300")} />
                ))}
              </div>
              <span className="text-sm text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 cursor-pointer">
                128 Reviews
              </span>
            </div>

            <div className="flex items-end gap-3 mb-8">
              <span className="text-4xl font-bold text-slate-900">$189.00</span>
              <span className="text-lg text-slate-400 line-through mb-1">$220.00</span>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded mb-1 ml-2">
                Save 15%
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              Experience unparalleled comfort and energy return with our latest running shoe. Designed for long distances and maximum performance on any terrain.
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-900">Color: <span className="text-slate-500 capitalize">{selectedColor}</span></span>
              </div>
              <div className="flex gap-3">
                {[
                  { id: 'black', class: 'bg-slate-900' },
                  { id: 'white', class: 'bg-slate-100 border border-slate-300' },
                  { id: 'blue', class: 'bg-blue-600' },
                  { id: 'red', class: 'bg-red-600' },
                ].map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                      selectedColor === color.id ? "ring-2 ring-primary-500 ring-offset-2" : "hover:scale-110"
                    )}
                  >
                    <div className={cn("w-8 h-8 rounded-full", color.class)} />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-900">Size (US)</span>
                <button className="text-sm text-primary-600 hover:underline underline-offset-4">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['8', '8.5', '9', '9.5', '10', '10.5', '11', '12'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "h-12 rounded-xl border font-medium transition-all",
                      selectedSize === size 
                        ? "border-primary-600 bg-primary-50 text-primary-700 ring-1 ring-primary-600" 
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-slate-200 rounded-xl bg-white h-14">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-l-xl transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 text-center font-medium text-slate-900">{quantity}</div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-r-xl transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button size="lg" className="flex-1 h-14 text-base shadow-lg shadow-primary-600/20">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck className="w-5 h-5 text-slate-400" />
                <span>Free shipping over $100</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-slate-400" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Mini Cart & Checkout Elements" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-slate-50">
        {/* Mini Cart */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden flex flex-col h-full">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-semibold text-slate-900 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Cart (2)
            </h3>
          </div>
          <div className="p-4 flex-1 overflow-y-auto space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                  <img src={`https://picsum.photos/seed/cart${i}/100/100`} alt="Item" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-medium text-slate-900 truncate pr-4">Essential Cotton T-Shirt</h4>
                    <span className="text-sm font-bold text-slate-900 shrink-0">${i === 1 ? '35.00' : '45.00'}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Color: Black | Size: M</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-slate-200 rounded-md bg-white h-7">
                      <button className="w-7 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-l-md"><Minus className="w-3 h-3" /></button>
                      <span className="w-8 text-center text-xs font-medium">1</span>
                      <button className="w-7 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-r-md"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button className="text-xs text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <div className="flex justify-between text-sm text-slate-600 mb-2">
              <span>Subtotal</span>
              <span className="font-medium text-slate-900">$80.00</span>
            </div>
            <div className="flex justify-between text-sm text-slate-600 mb-4">
              <span>Shipping</span>
              <span className="font-medium text-slate-900">Calculated at checkout</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </div>
        </div>

        {/* Order Summary / Promo Code */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Promo Code</h3>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter code" 
                className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              />
              <Button variant="secondary">Apply</Button>
            </div>
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-emerald-800 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                SUMMER20 applied
              </div>
              <span className="text-sm font-bold text-emerald-700">-$16.00</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Payment Method</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between p-4 border border-primary-500 bg-primary-50 rounded-xl cursor-pointer ring-1 ring-primary-500">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border-4 border-primary-600 bg-white" />
                  <span className="font-medium text-primary-900">Credit Card</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-5 bg-slate-200 rounded" />
                  <div className="w-8 h-5 bg-slate-200 rounded" />
                </div>
              </label>
              <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full border border-slate-300 bg-white" />
                  <span className="font-medium text-slate-700">PayPal</span>
                </div>
                <div className="w-12 h-5 bg-slate-200 rounded" />
              </label>
            </div>
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}


