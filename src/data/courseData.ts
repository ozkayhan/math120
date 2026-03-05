export interface VideoLink {
    title: string;
    url: string;
}

export interface WebLink {
    title: string;
    url: string;
}

export interface WeekContent {
    week: number;
    startDate: string;
    topics: string[];
    youtube: VideoLink[];
    paulNotes: WebLink[];
}

export const courseData: WeekContent[] = [
    {
        week: 1,
        startDate: "2026-02-16",
        topics: ["9.1 Sequences and Convergence"],
        youtube: [
            { title: "Calculus-II : Dizi (Sequence) Nedir?", url: "https://www.youtube.com/watch?v=z7UBx7_QIVU" },
            { title: "Calculus-II : Dizilerin Limitini Bulma", url: "https://www.youtube.com/watch?v=sk3WLFTRswc" },
            { title: "Calculus-II : Dizilerin Yakınsak veya Iraksak Olup Olmadığını Belirleme", url: "https://www.youtube.com/watch?v=ZckR-hez4FcA" },
            { title: "Aritmetik Diziler : Aritmetik Dizi Nedir?", url: "https://www.youtube.com/watch?v=ieBRQlXs3hY" },
            { title: "Geometrik Diziler : Geometrik Dizi Nedir?", url: "https://www.youtube.com/watch?v=77ePxFLhAO0" },
            { title: "Calculus-II : Artan, Azalan ve Monoton Diziler", url: "https://www.youtube.com/watch?v=XPBnZEhmErM" },
            { title: "Calculus-II : Türev Kullanarak Dizilerin Artan veya Azalan Olduğunu Belirleme", url: "https://www.youtube.com/watch?v=pUpbPgSqgpw" },
            { title: "Calculus-II : Sınırlı Diziler ve EBAS-EKÜS", url: "https://www.youtube.com/watch?v=Ll_8aPqUeco" },
            { title: "Calculus-II : Monotone Closeness Theorem", url: "https://www.youtube.com/watch?v=7An-Md1oHME" },
            { title: "Calculus-II : Diziler Örnek Soru 1, 2, 3 (1. Soru)", url: "https://www.youtube.com/watch?v=GhxgUPxMECw" },
            { title: "Calculus-II : Diziler Örnek Soru 2", url: "https://www.youtube.com/watch?v=RWHABVpjz9A" },
            { title: "Calculus-II : Sequence Sample Question 3", url: "https://www.youtube.com/watch?v=8iz-ex5e9SI" }
        ],
        paulNotes: [
            { title: "Sequences", url: "https://tutorial.math.lamar.edu/Classes/CalcII/Sequences.aspx" },
            { title: "More on Sequences", url: "https://tutorial.math.lamar.edu/Classes/CalcII/MoreSequences.aspx" }
        ]
    },
    {
        week: 2,
        startDate: "2026-02-23",
        topics: ["9.2 Infinite Series", "9.3 Convergence Tests for Positive Series"],
        youtube: [
            { title: "Calculus-II : Seri Nedir?", url: "https://www.youtube.com/watch?v=63ynve7hGnA" },
            { title: "Calculus-II : Seri Testleri ve Amaçları", url: "https://www.youtube.com/watch?v=eQdzrSeUYpA" },
            { title: "Calculus-II : N. Terim Testi (Iraksaklık Testi)", url: "https://www.youtube.com/watch?v=2ZqUSm7g5LA" },
            { title: "Calculus-II : Geometrik Seri Testi", url: "https://www.youtube.com/watch?v=3-techGweNQ" },
            { title: "Geometrik Serilerin Toplamını Bulma", url: "https://www.youtube.com/watch?v=n-RsKipqgN4" },
            { title: "Calculus-II : Teleskopik Seriler ve Özellikleri", url: "https://www.youtube.com/watch?v=QO8WDCf5s1c" },
            { title: "Calculus-II : P Serisi Testi", url: "https://www.youtube.com/watch?v=2Hrz_2isZF8" },
            { title: "Calculus-II : İntegral Testi", url: "https://www.youtube.com/watch?v=mTDR6_3_VEE" },
            { title: "Calculus-II : İntegral Testi Örnek Sorular 1, 2", url: "https://www.youtube.com/watch?v=_IR92vKCRRY" },
            { title: "Calculus-II : Karşılaştırma Testleri (Comparison Tests)", url: "https://www.youtube.com/watch?v=2ZtV_MOdGOI" }
        ],
        paulNotes: [
            { title: "Series – The Basics", url: "https://tutorial.math.lamar.edu/Classes/CalcII/Series_Basics.aspx" },
            { title: "Convergence/Divergence of Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/ConvergenceOfSeries.aspx" },
            { title: "Special Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/Series_Special.aspx" },
            { title: "Integral Test", url: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegralTest.aspx" },
            { title: "Comparison Test/Limit Comparison Test", url: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesCompTest.aspx" }
        ]
    },
    {
        week: 3,
        startDate: "2026-03-02",
        topics: ["9.4 Absolute and Conditional Convergence", "9.5 Power Series"],
        youtube: [
            { title: "Calculus-II : Oran Testi (Ratio Test)", url: "https://www.youtube.com/watch?v=ZlCZRhvZ10M" },
            { title: "Calculus-II : Kök Testi (Root Test)", url: "https://www.youtube.com/watch?v=yeXCtxfpkrE" },
            { title: "Calculus-II : Alterne Seri Testi (Alternating Series Test)", url: "https://www.youtube.com/watch?v=2K3JyPiJ8UA" },
            { title: "Calculus-II : Mutlak ve Koşullu Yakınsaklık", url: "https://www.youtube.com/watch?v=acanzzpjfM0" },
            { title: "Calculus-II : Power Series", url: "https://www.youtube.com/watch?v=LRpqC87_ebs" },
            { title: "Calculus-II : Kuvvet Serilerinin Yakınsaklık Aralığı ve Yarıçapı", url: "https://www.youtube.com/watch?v=ivP8roxnvtU" }
        ],
        paulNotes: [
            { title: "Alternating Series Test", url: "https://tutorial.math.lamar.edu/Classes/CalcII/AlternatingSeries.aspx" },
            { title: "Absolute Convergence", url: "https://tutorial.math.lamar.edu/Classes/CalcII/AbsoluteConvergence.aspx" },
            { title: "Ratio Test", url: "https://tutorial.math.lamar.edu/Classes/CalcII/RatioTest.aspx" },
            { title: "Root Test", url: "https://tutorial.math.lamar.edu/Classes/CalcII/RootTest.aspx" },
            { title: "Power Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeries.aspx" },
            { title: "Power Series and Functions", url: "https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeriesandFunctions.aspx" }
        ]
    },
    {
        week: 4,
        startDate: "2026-03-09",
        topics: ["9.6 Taylor and Maclaurin Series", "9.7 Applications of Taylor and Maclaurin Series", "10.1 Analytic Geometry in 3D", "10.2 Vectors"],
        youtube: [
            { title: "Calculus-II: Taylor and Maclaurin Series Expansions", url: "https://www.youtube.com/watch?v=NqCPeLclcys" },
            { title: "Calculus-II : Taylor ve Maclaurin Serilerini Bulma", url: "https://www.youtube.com/watch?v=tDY6XyI1TeE" },
            { title: "Calculus-II : 1/(1-x), e^x, sinx, cosx Maclaurin Serileri", url: "https://www.youtube.com/watch?v=9znltvtWWic" },
            { title: "Calculus-II: What is a Vector?", url: "https://www.youtube.com/watch?v=W9QpjZip0h8" },
            { title: "Calculus-II: Finding Vector Length and Unit Vector", url: "https://www.youtube.com/watch?v=_IC55Jh1ahQ" },
            { title: "Calculus-II: Non-Unit to Unit Vector", url: "https://www.youtube.com/watch?v=ejtCUEIAtGU" },
            { title: "Calculus-II : Birim Baz Vektörler (i , j , k)", url: "https://www.youtube.com/watch?v=Cs_xzlFPCnM" }
        ],
        paulNotes: [
            { title: "Taylor Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx" },
            { title: "Applications of Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeriesApps.aspx" },
            { title: "Binomial Series", url: "https://tutorial.math.lamar.edu/Classes/CalcII/BinomialSeries.aspx" },
            { title: "3-Dimensional Space", url: "https://tutorial.math.lamar.edu/Classes/CalcII/3DSpace.aspx" },
            { title: "The 3-D Coordinate System", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/3DCoords.aspx" },
            { title: "Vectors Intro / Basic Concepts", url: "https://tutorial.math.lamar.edu/Classes/CalcII/Vectors_Basics.aspx" },
            { title: "Vector Arithmetic", url: "https://tutorial.math.lamar.edu/Classes/CalcII/VectorArithmetic.aspx" }
        ]
    },
    {
        week: 5,
        startDate: "2026-03-16",
        topics: ["10.3 The Cross Product in 3-Space", "10.4 Planes and Lines", "10.5 Quadric Surfaces"],
        youtube: [
            { title: "Calculus-II: Dot Product", url: "https://www.youtube.com/watch?v=JsB-XP0V3PE" },
            { title: "Calculus-II: Cross Product", url: "https://www.youtube.com/watch?v=QaaqS8oTl6E" },
            { title: "Calculus-II : Uzayda Doğru Denklemi", url: "https://www.youtube.com/watch?v=kaP9IHWcpXU" },
            { title: "Calculus-II : Düzlem Denklemi Yazma", url: "https://www.youtube.com/watch?v=DP2wWoUXPxM" },
            { title: "Calculus-II : Üç Noktası Verilen Düzlem Denklemi", url: "https://www.youtube.com/watch?v=iT4NHMXD6d8" },
            { title: "Calculus-II : Uzayda Doğru ve Düzlem Durumları", url: "https://www.youtube.com/watch?v=NcOFCWvWKyY" }
        ],
        paulNotes: [
            { title: "Dot Product", url: "https://tutorial.math.lamar.edu/Classes/CalcII/DotProduct.aspx" },
            { title: "Cross Product", url: "https://tutorial.math.lamar.edu/Classes/CalcII/CrossProduct.aspx" },
            { title: "Equations of Lines", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx" },
            { title: "Equations of Planes", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfPlanes.aspx" },
            { title: "Quadric Surfaces", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/QuadricSurfaces.aspx" }
        ]
    },
    {
        week: 6,
        startDate: "2026-03-23",
        topics: ["13.1 Functions of Several Variables", "13.2 Limits and Continuity"],
        youtube: [
            { title: "Calculus-II : Çok Değişkenli Fonksiyon Nedir?", url: "https://www.youtube.com/watch?v=V1Egr4ZlJOk" }
        ],
        paulNotes: [
            { title: "Functions of Several Variables", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/MultiVrbleFcns.aspx" },
            { title: "Limits", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/Limits.aspx" }
        ]
    },
    {
        week: 7,
        startDate: "2026-03-30",
        topics: ["13.3 Partial Derivatives", "13.4 Higher-Order Derivatives"],
        youtube: [
            { title: "Calculus-II: Partial Derivatives", url: "https://www.youtube.com/watch?v=E1P0psEV7TM" }
        ],
        paulNotes: [
            { title: "Partial Derivatives (Giriş)", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivsIntro.aspx" },
            { title: "Partial Derivatives (Hesaplama)", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx" },
            { title: "Interpretations", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivInterp.aspx" },
            { title: "Higher Order Partial Derivatives", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/HighOrderPartialDerivs.aspx" }
        ]
    },
    {
        week: 8,
        startDate: "2026-04-06",
        topics: ["13.5 The Chain Rule", "13.6 Linear Approximations", "13.7 Gradients and Directional Derivatives"],
        youtube: [
            { title: "Calculus-II : Kısmi Türevde Zincir Kuralı", url: "https://www.youtube.com/watch?v=F13ypBH4h6o" },
            { title: "Calculus-II: Gradient Vector", url: "https://www.youtube.com/watch?v=FsgaCDfcETs" },
            { title: "Calculus-II : Yönlü Türev", url: "https://www.youtube.com/watch?v=p62_BWxo5LM" },
            { title: "Calculus-II : Maks/Min Yönlü Türev", url: "https://www.youtube.com/watch?v=7qXTG2ZC40A" },
            { title: "Calculus-II : Teğet Düzlem Denklemi", url: "https://www.youtube.com/watch?v=SomYsqDMTsA" },
            { title: "Calculus-II : Normal Doğru Denklemi", url: "https://www.youtube.com/watch?v=ZIXIZ6uQTNo" }
        ],
        paulNotes: [
            { title: "Differentials", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/Differentials.aspx" },
            { title: "Chain Rule", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/ChainRule.aspx" },
            { title: "Directional Derivatives", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/DirectionalDeriv.aspx" },
            { title: "Tangent Planes", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/TangentPlanes.aspx" },
            { title: "Gradient Vector & Normal Lines", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/GradientVectorTangentPlane.aspx" }
        ]
    },
    {
        week: 9,
        startDate: "2026-04-13",
        topics: ["13.8 Implicit Functions", "14.1 Extreme Values"],
        youtube: [
            { title: "Calculus-II : Kapalı Fonksiyon Türevi", url: "https://www.youtube.com/watch?v=0zXtByj8Meg" },
            { title: "Calculus-II : Yerel Maks, Min ve Eyer Noktaları", url: "https://www.youtube.com/watch?v=zOBSIk5yV6U" }
        ],
        paulNotes: [
            { title: "Relative Minimums and Maximums", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/RelativeExtrema.aspx" }
        ]
    },
    {
        week: 10,
        startDate: "2026-04-20",
        topics: ["14.2 Extreme Values on Restricted Domains", "14.3 Lagrange Multipliers", "15.1 Double Integrals"],
        youtube: [
            { title: "Calculus-II : Lagrange Çarpanı Metodu", url: "https://www.youtube.com/watch?v=WchFhYD6YWA" },
            { title: "Calculus-II: What is a Double Integral?", url: "https://www.youtube.com/watch?v=0GebnSN7Obo" },
            { title: "Calculus-II : Çift Katlı İntegral Hesaplama", url: "https://www.youtube.com/watch?v=G2TqwCO_Q2U" },
            { title: "Calculus-II: Determining Limits in Double Integral", url: "https://www.youtube.com/watch?v=ajAe-BV0CFE" }
        ],
        paulNotes: [
            { title: "Absolute Minimums and Maximums", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/AbsoluteExtrema.aspx" },
            { title: "Lagrange Multipliers", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/LagrangeMultipliers.aspx" },
            { title: "Multiple Integrals Intro", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/MultipleIntegralsIntro.aspx" },
            { title: "Double Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/DoubleIntegrals.aspx" }
        ]
    },
    {
        week: 11,
        startDate: "2026-04-27",
        topics: ["15.2 Iteration of Double Integrals", "15.4 Polar Coordinates", "15.5 Triple Integrals"],
        youtube: [
            { title: "Calculus-II : İntegral Alma Sırasını Değiştirme", url: "https://www.youtube.com/watch?v=t1zi6vFd0p8" },
            { title: "Calculus-II: What are Polar Coordinates?", url: "https://www.youtube.com/watch?v=gISmBTNmjzY" },
            { title: "Calculus-II : Kartezyen - Kutupsal Dönüşüm", url: "https://www.youtube.com/watch?v=DlKltmUUv7U" },
            { title: "Calculus-II : Kutupsal Çift Katlı İntegral", url: "https://www.youtube.com/watch?v=l28c5vWxcJI" },
            { title: "Calculus-II : Üç Katlı İntegral Neyi Hesaplar?", url: "https://www.youtube.com/watch?v=kM4U2Lyr3N0" },
            { title: "Calculus-II : Üç Katlı İntegral Hesaplama", url: "https://www.youtube.com/watch?v=8aGTGtpqrmE" },
            { title: "Calculus-II : Üç Katlı İntegralde Sınır Belirleme", url: "https://www.youtube.com/watch?v=NKprMVm1sRI" }
        ],
        paulNotes: [
            { title: "Iterated Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/IteratedIntegrals.aspx" },
            { title: "Double Integrals over General Regions", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIGeneralRegion.aspx" },
            { title: "Double Integrals in Polar Coordinates", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIPolarCoords.aspx" },
            { title: "Triple Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx" }
        ]
    },
    {
        week: 12,
        startDate: "2026-05-04",
        topics: ["15.6 Change of Variables", "12.1 Vector Functions", "12.3 Curves", "16.1 Vector Fields"],
        youtube: [
            { title: "Calculus-II : Parametrik Eğriler", url: "https://www.youtube.com/watch?v=furguQeqjyk" },
            { title: "Calculus-II : Vektör Değerli Fonksiyon Nedir?", url: "https://www.youtube.com/watch?v=ZgGhErZG6tU" },
            { title: "Calculus-II : Fonksiyonların Tanım Kümesi", url: "https://www.youtube.com/watch?v=oTgvv67fus4" },
            { title: "Calculus-II : Vektör Alanı Nedir?", url: "https://www.youtube.com/watch?v=IHXNjV1Uli0" }
        ],
        paulNotes: [
            { title: "Cylindrical Coordinates", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/TICylindricalCoords.aspx" },
            { title: "Spherical Coordinates", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/TISphericalCoords.aspx" },
            { title: "Change of Variables", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/ChangeOfVariables.aspx" },
            { title: "Vector Functions", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFunctions.aspx" },
            { title: "Calculus with Vector Functions", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFcnsCalculus.aspx" },
            { title: "Vector Fields", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields.aspx" }
        ]
    },
    {
        week: 13,
        startDate: "2026-05-11",
        topics: ["17.1 Gradient, Divergence, Curl", "16.2 Conservative Fields", "16.3 Line Integrals"],
        youtube: [
            { title: "Calculus-II : Gradyan Vektör Alanı", url: "https://www.youtube.com/watch?v=el9qmQs-sy0" },
            { title: "Calculus-II : Çizgi İntegrali Nedir?", url: "https://www.youtube.com/watch?v=O1AR1K6FYu0" },
            { title: "Calculus-II : Parametrize Etme Kuralları", url: "https://www.youtube.com/watch?v=1U5uSI_JZaA" },
            { title: "Calculus-II : Çizgi İntegral Çeşitleri", url: "https://www.youtube.com/watch?v=ninWdQJibyY" }
        ],
        paulNotes: [
            { title: "Curl and Divergence", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/CurlDivergence.aspx" },
            { title: "Conservative Vector Fields", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/ConservativeVectorField.aspx" },
            { title: "Line Integrals – Part I", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx" },
            { title: "Line Integrals – Part II", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtII.aspx" }
        ]
    },
    {
        week: 14,
        startDate: "2026-05-18",
        topics: ["16.3 Line Integrals (Cont.)", "16.4 Line Integrals of Vector Fields", "17.3 Green’s Theorem"],
        youtube: [
            { title: "Calculus-II : Yay Uzunluğuna Göre Çizgi İntegrali", url: "https://www.youtube.com/watch?v=7spkZmpqueQ" },
            { title: "Calculus-II : Eksenlere Göre Çizgi İntegrali", url: "https://www.youtube.com/watch?v=JgTryr7z2RQ" },
            { title: "Calculus-II : Vektör Alanlarının Çizgi İntegrali", url: "https://www.youtube.com/watch?v=pmSTkhhbvnU" }
        ],
        paulNotes: [
            { title: "Line Integrals of Vector Fields", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsVectorFields.aspx" },
            { title: "Fundamental Theorem for Line Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/FundThmLineIntegrals.aspx" },
            { title: "Green’s Theorem", url: "https://tutorial.math.lamar.edu/Classes/CalcIII/GreensTheorem.aspx" }
        ]
    }
];
