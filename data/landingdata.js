import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
  } from "lucide-react";
  
  export const statsData = [
    {
      value: "20K+",
      label: "Active Users",
    },
    {
      value: "$1B+",
      label: "Transactions Tracked",
    },
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "4.5/5",
      label: "User Rating",
    },
  ];
  
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Enhanced Insights",
      description:
        "Gain in-depth understanding of your spending habits through AI-driven analytics.",
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Intelligent Receipt Analyzer",
      description:
        "Automatically extract information from receipts with advanced AI technology.",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "Financial Forecasting",
      description: "Design and oversee budgets with smart, tailored recommendations.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Multiple Account Management",
      description: "Handle various accounts and credit cards all in one location.",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Multiple Currency Support",
      description: "Support for various currencies with instant conversion.",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Automated Analysis",
      description: "Receive automated financial analyses and suggestions.",
    },
  ];
  
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Create Your Account",
      description:
        "Begin within minutes with our easy and safe registration process.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Track Your Spending",
      description:
        "Automatically sort and monitor your transactions in real-time.",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Get Insights",
      description:
        "Obtain AI-driven insights and suggestions to enhance your financial management.",
    },
  ];
  
  export const testimonialsData = [
    {
      name: "Samantha Williams",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "Welth has revolutionized the way I handle my business finances. The AI-driven insights have enabled me to uncover cost-saving opportunities I wasn't aware of before.",
    },
    {
      name: "David Lee",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote:
        "The receipt scanning functionality saves me countless hours each month. I can now concentrate on my work rather than on manual data entry and expense management.",
    },
    {
      name: "Sophia Martinez",
      role: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/women/74.jpg",
      quote:
        "I highly recommend Welth to all my clients. Its multi-currency support and comprehensive analytics make it ideal for global investors.",
    },
  ];