
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useInView } from '@/hooks/useInView'
import { Check } from 'lucide-react'
const plans = [
  {
    name: 'Standard',
    price: '$5.99',
    description: 'Perfect for small local deliveries.',
    features: [
      'Standard 3-5 day delivery',
      'Basic tracking',
      'Up to 5kg weight',
      'Email support',
    ],
    cta: 'Ship Now',
    popular: false,
    delay: 0,
  },
  {
    name: 'Express',
    price: '$12.99',
    description: 'Fast delivery for urgent items.',
    features: [
      'Next-day delivery',
      'Real-time GPS tracking',
      'Up to 15kg weight',
      'Priority support',
      'Signature required',
    ],
    cta: 'Ship Express',
    popular: true,
    delay: 150,
  },
  {
    name: 'International',
    price: '$24.99',
    description: 'Global shipping made simple.',
    features: [
      '5-10 day global delivery',
      'Customs handling',
      'Up to 20kg weight',
      '24/7 Support',
      'Insurance included',
    ],
    cta: 'Ship Global',
    popular: false,
    delay: 300,
  },
]
export function Pricing() {
  const { ref, hasTriggered } = useInView({
    threshold: 0.1,
    rootMargin: '0px',
  })
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the service that fits your timeline and budget. No hidden
            fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${hasTriggered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{
                transitionDelay: `${plan.delay}ms`,
              }}
            >
              <Card
                className={`flex flex-col relative h-full transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-blue-500 shadow-lg scale-105 z-10 hover:scale-110' : 'border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-md animate-in fade-in zoom-in duration-500 delay-500">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4 mb-2">
                    <span className="text-4xl font-bold text-slate-900 dark:text-slate-50">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400"> / start</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-slate-600"
                      >
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full transition-transform active:scale-95"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
