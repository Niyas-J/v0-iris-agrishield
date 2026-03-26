"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, MapPin, Sprout, BadgeIndianRupee } from "lucide-react"

// Realistic Mock Data for UI
const crops = [
  { name: "Wheat", price: "₹2,275/q", trend: "+2.4%", status: "up", location: "Punjab, IN", growth: "Harvest Phase" },
  { name: "Rice (Paddy)", price: "₹2,183/q", trend: "+1.2%", status: "up", location: "Haryana, IN", growth: "Vegetative" },
  { name: "Cotton", price: "₹7,020/q", trend: "-0.8%", status: "down", location: "Gujarat, IN", growth: "Flowering" },
  { name: "Sugarcane", price: "₹340/q", trend: "0.0%", status: "stable", location: "Uttar Pradesh, IN", growth: "Maturation" },
]

export function CropMarketInsights() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">Crop Market & Growth.</h2>
          <p className="text-slate-500 text-lg font-light">
            Live prices, local variations, and crop growth stages tracked daily.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {crops.map((crop, index) => (
            <motion.div
              key={crop.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-lg font-bold">
                    {crop.name}
                    {crop.status === "up" ? (
                      <BadgeIndianRupee className="w-5 h-5 text-emerald-500" />
                    ) : crop.status === "down" ? (
                      <TrendingDown className="w-5 h-5 text-rose-500" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-slate-400" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-2 text-foreground">{crop.price}</p>
                  <div className="flex items-center space-x-2 text-sm mb-4">
                    <span className={`font-semibold ${crop.status === "up" ? "text-emerald-600" : crop.status === "down" ? "text-rose-600" : "text-slate-600"}`}>
                      {crop.trend}
                    </span>
                    <span className="text-slate-500">vs yesterday</span>
                  </div>
                  
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {crop.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Sprout className="w-4 h-4 mr-2 text-emerald-500" />
                      {crop.growth}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
