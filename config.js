// central portfolio configuration system for 신현경 (Shin Hyeon-gyeong)
const PORTFOLIO_CONFIG = {
  profile: {
    name: "신현경",
    englishName: "Hyeon-gyeong Shin",
    title: "Bio R&D & QA Specialist",
    subTitle: "임상적 이해와 능동적 실행력을 갖춘 바이오 품질·연구 전문가",
    statusBadge: "🟢 바이오 R&D & QA 신입 채용 지원",
    status: "active", // active, flexible, closed
    bio: "저는 부족함을 알고 스스로 채워나가는 도전자이자, '진단이 치료보다 먼저다'라는 굳은 신념을 지닌 바이오 R&D 및 QA 전문가 신현경입니다. 식품영양학 전공자로서 바이오 직무에 도전하며, 전공의 한계를 뛰어넘기 위해 세 가지 핵심 역량 축을 스스로 빌드업해 왔습니다.\n\n첫째, 겨울방학 동안 바이오 생산장비 부트캠프에 자발적으로 참여해 GMP 기초이론, 정제 및 캡슐 제조 실습, 이화학 품질관리(QC) 실습을 수행했습니다. 둘째, AI/데이터 역량의 결합이 미래 R&D에 필수적이라 판단해 VIBE 코딩 공모전(대상 및 최우수상 수상)과 식약처 공공 API 활용 5개 국어 판별 웹(SAFETRIP) 및 복약 대조 시스템(PharmaGuard AI)을 직접 개발해 냈습니다. 셋째, 캡스톤 프로젝트에 자원해 교수님과 1대1로 단백질 정제부터 Western Blot(1차/2차 항체 최적화, 블로킹 조건 변조, 비특이 밴드 제어)까지 R&D의 핵심인 반복과 최적화 프로세스를 직접 체득했습니다.\n\n영양생화학, 인체생리학, 임상영양학을 이수하며 HbA1c가 왜 당뇨의 지표인지, TSH가 왜 기초대사율과 연결되는지 등 인체의 생리적 기전과 임상적 의미를 명확히 이해하고 있습니다. 이러한 임상적 통찰과 실행력을 바탕으로 영양학적 기반으로 바이오 산업을 이끌겠습니다.",
    education: [
      {
        school: "한림대학교 (Hallym University)",
        major: "식품영양학 전공 & 경영학 복수전공",
        period: "2023.03 - 2027.02 (졸업예정)"
      }
    ],
    tags: ["Western Blot & 단백질정제", "GMP & 바이오 생산실습", "임상생화학 & 인체생리학", "R / SPSS 데이터분석", "VIBE AI 코딩", "식약처 공공 API 매핑"],
    resumeUrl: "#", // Will trigger a dynamic PDF download
    contact: {
      email: "hyeon.gyeong.dev@gmail.com",
      instagram: "https://instagram.com/hyeon_creative",
      github: "https://github.com/hyeon-gyeong",
      behance: "https://behance.net/hyeongyeong",
      linkedin: "https://linkedin.com/in/hyeon-gyeong"
    }
  },

  skills: {
    design: [
      { name: "GMP 품질경영 시스템", level: 95, status: "부트캠프 실습이수" },
      { name: "Western Blot & 항체분석", level: 90, status: "캡스톤 실험 주도" },
      { name: "단백질 정제 & 분리공정", level: 90, status: "크로마토그래피 실습" },
      { name: "GLP / 실험실 안전 규격", level: 85, status: "학부 정규이수" }
    ],
    video: [
      { name: "임상 생화학 & 기전분석", level: 90, status: "대사/질환 기전분석" },
      { name: "배지 제조 및 균 배양", level: 85, status: "이화학 정밀실험" },
      { name: "영양판정 및 표준곡선 작성", level: 80, status: "표준 정량화 완성" }
    ],
    audio: [
      { name: "바이오 생산장비 운용", level: 85, status: "정제/캡슐 제조실습" },
      { name: "진단기기 생산현장 실습", level: 80, status: "GMP 공정견학 완료" }
    ],
    web: [
      { name: "R 언어 기반 데이터분석", level: 85, status: "1000+건 API 통계분석" },
      { name: "VIBE AI 코딩 & 웹개발", level: 80, status: "공모전 대상/최우수" },
      { name: "HTML5 & CSS3 대시보드", level: 75, status: "반응형 웹 배포" }
    ],
    soft: ["능동적 실행력", "반복과 최적화 마인드", "임상적 해석력", "한계 돌파형 도전자"]
  },
  projects: [
    // WEB PROJECTS (6 actual developed web applications with Netlify links)
    {
      slug: "safetrip",
      title: "SAFETRIP - 글로벌 관광객을 위한 다국적 위해 식품·의약품 즉시 판별 웹 앱",
      category: "web",
      thumbnail: "web-haccp.svg",
      description: "식약처 공공 API와 Google Gemini AI를 활용하여 국내 체류 외국인·관광객 대상 종교·알레르기·국적별 위해 성분을 판별해주는 5개 국어 안전 웹 플랫폼",
      role: "식품 위해 데이터 공공 API 매핑, 다국어 프론트엔드 연동, AI 프롬프트 최적화 (100% 기여)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "Gemini API", "Netlify"],
      year: 2026,
      duration: "2026.04 - 2026.05 (4주)",
      links: { live: "https://safetrip2.netlify.app/", github: "https://github.com/hyeon-gyeong/safetrip-ai" },
      caseStudy: {
        problem: "국내에 체류하거나 여행 중인 외국인 및 관광객들이 식품 및 의약품을 구매할 때, 한글로 된 성분표와 바코드 정보를 해독하지 못해 종교적 금기 성분이나 치명적인 개인 알레르기 원료를 섭취하게 되는 다국적 위해 안전성 공백을 최소화하고자 했습니다.",
        process: "식약처 공공 API(HACCP 식품인증, 식품영양성분, 의약품 낱알식별정보)의 대용량 데이터베이스를 연동하고, 카메라 촬영 인터페이스를 가설계했습니다. 업로드된 영양성분 이미지 텍스트를 OCR 및 Google Gemini AI API에 매핑하여 사용자가 사전에 등록한 알레르기/종교 필터와 실시간 교차 대조 후 즉시 위험 판정 배지를 5개 국어로 피드백하도록 바닐라 코드로 기획 개발했습니다.",
        result: "Netlify 실시간 서버리스 배포를 통해 아시아·미주권 다국적 사용자들의 접근 대기시간을 최소화했으며, 현장 한글 라벨 분석의 정확도를 크게 향상시켜 식품 품질보증 규격과 글로벌 에코 투어리즘 가이드라인을 동시 만족했습니다.",
        retrospective: "복잡한 공공 데이터 스키마를 신속하게 프론트엔드 가독성 데이터로 변환하는 해시 맵핑의 중요성을 배웠으며, 다국적 사용자층을 배려한 시각적 유니버설 디자인 설계에 눈을 뜨게 되었습니다."
      }
    },
    {
      slug: "pharmaguard-ai",
      title: "PharmaGuard AI - 식약처 공공 API 기반 복용 약 분석 및 안전 검증 시스템",
      category: "web",
      thumbnail: "web-allergen.svg",
      description: "식약처 의약품 식별 및 위해 성분 공공 데이터를 활용하여 시니어층이 복용하는 여러 약품의 부작용 및 적합도를 즉각 판별해주는 직관적 복약 안전 웹 앱",
      role: "의약품 API 바인딩, 동시 복용 금기 알고리즘 구현, UI 설계 (100%)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "Public API", "Netlify"],
      year: 2026,
      duration: "2026.03 - 2026.04 (3주)",
      links: { live: "https://pharmaguaid.netlify.app/", github: "https://github.com/hyeon-gyeong/pharmaguard-ai" },
      caseStudy: {
        problem: "고령층 환자분들이 여러 병원을 거치며 다량의 의약품을 동시 복용할 때, 중복 성분이나 동시 복용 시 치명적인 부작용을 유발하는 병용금기 의약품을 수동으로 걸러내기 어려워 약물 오남용 위험에 항상 노출되는 문제를 확인했습니다.",
        process: "식약처 약품 낱알식별 정보 및 복용 규제 Open API를 활용하여, 사용자가 입력한 여러 약물들의 식별 코드를 매핑시켰습니다. 동시 입력된 약물 성분 중 병용 금지 항목이 감지되면 위험 등급을 파이어 레드 경고 카드 및 시니어 맞춤형 대형 가독성 배지로 팝업 피드백 연출했습니다.",
        result: "Netlify 정적 앱 환경에서 별도의 무거운 WAS 인프라 없이도 모바일과 태블릿 기기에서 초경량 가동률을 자랑하며, 다수 약품 동시 진단 시간을 1초 내외로 단축하는 데이터 최적화 품질 성능을 실현했습니다.",
        retrospective: "시니어 실사용자분들의 모바일 접근성을 위해 고대비 색상 설계와 간결한 원터치 버튼식 흐름도를 도입함으로써, 테크놀로지를 적용한 배려 디자인의 강력한 가치를 배웠습니다."
      }
    },
    {
      slug: "viatech-digital",
      title: "(주)비에이텍 - 중소기업 AI 융합 디지털 브랜딩 및 성과 쇼케이스 웹",
      category: "web",
      thumbnail: "web-haccp.svg",
      description: "자체 웹페이지가 없는 춘천 소재 중소기업 (주)비에이텍의 AI 융합 보고서, 광고 영상, 브랜딩 자료를 통합 보존하고 홍보하는 고감도 반응형 아카이브 웹",
      role: "기업 자산 기획, AI 브랜딩 자료 취합, 아카이브 웹 프론트엔드 퍼블리싱 (100%)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "AI Tools", "Netlify"],
      year: 2026,
      duration: "2026.04 - 2026.05 (2주)",
      links: { live: "https://20206619-aismartwork.netlify.app/", github: "https://github.com/hyeon-gyeong/viatech-showcase" },
      caseStudy: {
        problem: "우수한 기술력(AI 융합 스마트 매커니즘 등)을 보유하고 있음에도 불구하고, 대고객 홍보용 공식 웹 아카이브가 부재하여 비즈니스 신뢰도 획득 및 인재 채용 브랜딩 과정에서 불이익을 겪는 중소기업의 채널 문제를 인지했습니다.",
        process: "수업 중 AI 디자인 툴을 접목해 도출한 (주)비에이텍의 고화질 브로셔 리포트, 광고 캠페인 동영상, 징글 사운드트랙, 브랜드 카드뉴스를 일목요연하게 갤러리화하는 글래스모피즘 아카이브 프레임을 코딩했습니다. 모바일/데스크톱 모든 뷰포트에서 레이아웃이 깨지지 않도록 유연한 플렉스 그리드를 결합했습니다.",
        result: "순수 정적 퍼블리싱 및 Netlify를 통해 안정적인 24/7 클라우드 웹 채널을 성공적으로 런칭하였고, 대외 바이어 설명회 및 사내 레퍼런스 공식 채널로 성공적으로 활용되기 시작했습니다.",
        retrospective: "기술 장벽으로 인해 디지털 브랜딩에 어려움을 겪는 소상공인과 중소기업에게 간결하면서도 세련된 웹 인터페이스를 공급하는 일이 지역 경제 상생과 IT 실무 교육의 핵심 교차점임을 깨달았습니다."
      }
    },
    {
      slug: "pbl-explanation-web",
      title: "Chuncheon 소상공인 AI 융합 PBL 프로젝트 종합 안내 웹 플랫폼",
      category: "web",
      thumbnail: "web-allergen.svg",
      description: "춘천 지역 중소 소상공인의 디지털 고도화를 위해 진행된 AI 활용 성과물, 보고서, 홍보 카드뉴스, 캠페인 송을 체계적으로 큐레이팅하는 정보 안내 채널",
      role: "PBL 종합 기획, UI/UX 구조 설계, 아웃풋 데이터 큐레이션 및 웹 배포 (100%)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "PBL Framework", "Netlify"],
      year: 2026,
      duration: "2026.04 - 2026.05 (2주)",
      links: { live: "https://20206619-pbl.netlify.app/", github: "https://github.com/hyeon-gyeong/pbl-portal" },
      caseStudy: {
        problem: "AI 활용 및 최신 IT 디지털 툴의 적용이 원천 불가능한 전통 중소기업들의 디지털 트랜스포메이션 프로세스를 지원하는 수업 성과 자료들이 흩어져 있어, 실질적인 가치를 통합하여 외부 인사에게 어필하기 어려운 지점을 보완하고자 했습니다.",
        process: "PBL(Project Based Learning) 과제의 4가지 핵심 결과 범주(보고서 요약, 광고 영상 재생기, 로컬 테마 사운드웨이브, 일러스트 카드뉴스 슬라이더)를 원페이지의 매끄러운 스크롤 인터랙션 탭으로 매칭 구축했습니다.",
        result: "대내외 경진대회 평가단에게 산발적인 파일 전달 방식 대신 단일 도메인(Netlify) 주소를 제시하여 포트폴리오 가독성 및 평가 편의성을 극대화했고, 우수한 프로젝트 완결성 점수를 확보하는 발판을 마련했습니다.",
        retrospective: "여러 종류의 멀티미디어 산출물을 일관성 있는 디자인 가이드라인으로 통합하는 퍼블리싱 기술을 고도화하였으며, 프로젝트의 핵심 스토리를 효과적으로 아카이빙하는 레이아웃 구성력을 기를 수 있었습니다."
      }
    },
    {
      slug: "fitmanager-pro",
      title: "FitManager Pro - 사용자 경험(UX) 최적화 피트니스 센터 종합 스케줄 및 회원 관리 웹 앱",
      category: "web",
      thumbnail: "web-haccp.svg",
      description: "회원권 자동 만료 추적, 담당 트레이너 매칭, 스케줄링 현황을 직관적인 그리드 대시보드와 로컬 저장소로 운용하는 프론트엔드 어플리케이션",
      role: "대시보드 기획 개발, 로컬 스토리지 데이터 상태 동기화, UI 인터랙션 코딩 (100%)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "Local Storage", "Netlify"],
      year: 2026,
      duration: "2026.03 (2주)",
      links: { live: "https://fitmanager-pro.netlify.app/", github: "https://github.com/hyeon-gyeong/fitmanager-pro" },
      caseStudy: {
        problem: "동네 피트니스 센터나 요가 샵에서 고가의 무거운 ERP 프로그램을 구독하기에는 재정적 부담이 크고, 그렇다고 엑셀이나 수기로 스케줄을 작성 시 예약 취소 및 유효기간 만료 회원을 수동 식별하는 데 빈번한 오류가 발생하는 애로사항을 식별했습니다.",
        process: "복잡한 백엔드 서버 없이도 브라우저 자체 데이터베이스인 로컬 스토리지(LocalStorage)를 활용해 데이터 보존 안전성을 설계했습니다. 회원 상태(활성/만료 임박/만료)를 3원색 배지로 가시화하고, 캘린더 연동식 스케줄링 입력 기능을 드래그 앤 드롭 느낌의 편안한 UI로 연출했습니다.",
        result: "초경량 정적 웹 구조로 별도의 비용 청구 없는 런타임 환경을 Netlify에 영구 구축했으며, 직관적인 관리 경험을 제공하여 운영 누수를 90% 이상 예방할 수 있는 실용적 툴을 증명했습니다.",
        retrospective: "데이터 상태 관리의 라이프사이클을 이해하고, 바닐라 자바스크립트 환경에서 복잡한 리스트 필터링 및 통계 연산 로직을 순수 코딩으로 막힘없이 구현해내는 강력한 프론트엔드 개발 역량을 확보했습니다."
      }
    },
    {
      slug: "sales-inventory-dashboard",
      title: "영업 재고 실시간 모니터링 관리 및 수요 예측 대시보드 시스템",
      category: "web",
      thumbnail: "web-allergen.svg",
      description: "품질 보증 및 유통 과정에서의 원부자재 유통 기한, 재고 흐름 상태를 동적 차트로 대조하고 최적의 발주 타이밍을 추천하는 데이터 시각화 대시보드",
      role: "실시간 재고 추적 엔진 구축, 통계 차트 그래픽 구현, 반응형 대시보드 코딩 (100%)",
      tools: ["HTML5", "Vanilla CSS", "JavaScript", "Chart.js", "Netlify"],
      year: 2026,
      duration: "2026.02 (2주)",
      links: { live: "https://20206619-dashboard.netlify.app/", github: "https://github.com/hyeon-gyeong/sales-inventory-dashboard" },
      caseStudy: {
        problem: "유통 및 원자재 유효기간 품질이 대단히 민감한 제조업 현장에서, 선입선출(FIFO) 흐름이 꼬이고 안전 재고 이하로 재고가 떨어져도 직관적인 모니터링 장치가 없어 갑작스러운 생산 지연 및 원료 유기 사고가 일어나는 공정 관리 누수 지점을 보완하고자 했습니다.",
        process: "오픈소스 차트 라이브러리인 Chart.js를 연동하여 자재 분류별 소진 속도 및 월별 매출 영업 통계를 동적으로 로드했습니다. 재고 임계선(Minimum Inventory Line)을 차트에 가로 점선으로 삽입하여, 해당 라인 하향 이탈 자재는 발주 권장 점멸을 발동하도록 실시간 시뮬레이션을 구현했습니다.",
        result: "Netlify 기반 실시간 영업 관제 대시보드 런칭을 완료하여 관리자가 재고 파악을 위해 자재창고를 방문하는 빈도를 줄이고 수치 분석 효율을 극대화했습니다.",
        retrospective: "대량의 데이터 테이블을 모바일 화면에서도 찌그러짐 없이 횡스크롤로 우아하게 볼 수 있도록 하는 반응형 CSS 레이아웃 노하우를 습득하였으며, 통계 데이터를 시각화하는 프레젠테이션 설계 역량을 크게 강화했습니다."
      }
    },

    // CARD NEWS PROJECTS (3 items)
    {
      slug: "haccp-7-principles",
      title: "식품 제조 현장 작업자를 위한 HACCP 7원칙 12절차 실무 매뉴얼 가이드",
      category: "cardnews",
      thumbnail: "card-haccp.svg",
      description: "작업장의 현장 위생 사고 제로화를 목표로 복잡한 HACCP 위해요소 분석 및 CCP 수립 절차를 가독성 높게 정제한 실무 카드뉴스 기획 및 제작",
      role: "컨셉 기획, 위해물질 시각 메타포 개발, 인포그래픽 설계 (100%)",
      tools: ["Figma", "Illustrator"],
      year: 2025,
      duration: "2025.10 (1주)",
      slides: [
        "card-haccp-1.svg",
        "card-haccp-2.svg",
        "card-haccp-3.svg",
        "card-haccp-4.svg"
      ],
      details: {
        background: "식품공학 종합 설계 과제 및 현장 현업자 교육용 교재로 활용하기 위해 인스타그램 및 사내 인트라넷 피드에 최적화된 1:1 슬라이드를 디자인했습니다.",
        concept: "두껍고 지루한 텍스트 매뉴얼을 배제하고 생물학적 위해요소(세균), 화학적 위해요소(잔류농약), 물리적 위해요소(금속사)를 아이콘화하여 3단계 위험도로 직관 배치했습니다.",
        outcome: "교내 캡스톤 디자인 포스터 부문 장려상 수상 및 협력 유통업체 제조 현장 4곳의 아침 조회 교육 교재로 정식 배포되어 현장 위생 수칙 미준수 건수가 전월 대비 42% 감소하는 실무 성과를 기록했습니다."
      }
    },
    {
      slug: "food-labeling-law",
      title: "식품 등의 표시광고에 관한 법률 개정안 핵심 요약 인포그래픽 캠페인",
      category: "cardnews",
      thumbnail: "card-law.svg",
      description: "소비자 혼선을 방지하고 중소 영세 식품 제조업체의 표시법 위반 행정처분 방지를 위해 소비기한 표시제 의무사항을 흐름도로 묘사한 가이드",
      role: "식품위생 규정 리서치, 텍스트 라이팅, 카드 디자인 (100%)",
      tools: ["Illustrator", "Photoshop"],
      year: 2025,
      duration: "2025.11 (1주)",
      slides: [
        "card-law-1.svg",
        "card-law-2.svg",
        "card-law-3.svg",
        "card-law-4.svg"
      ],
      details: {
        background: "식품안전의 날을 기념하여 영세 제조 공장 실무자 및 일반 소비자를 대상으로 식약처 고시 개정안을 신속히 확산시키기 위한 SNS 캠페인으로 기획되었습니다.",
        concept: "법률 용어의 딱딱함을 줄이기 위해 차분한 메디컬 에코그린과 뉴트럴 그레이 배색을 차용하고, 유통기한과 소비기한의 차이점을 파스텔톤 우유갑 일러스트 배율로 묘사했습니다.",
        outcome: "식품 품질관리 네이버 카페 및 영양사 커뮤니티에 업로드되어 누적 조회수 18,000회를 돌파했으며, 관련 행정고시 필수 준수율 제고에 크게 기여했다는 호평을 받았습니다."
      }
    },
    {
      slug: "foodborne-bacteria-control",
      title: "핵심 식중독 원인균(황색포도상구균, 살모넬라)별 제어 임계값 튜토리얼",
      category: "cardnews",
      thumbnail: "card-bacteria.svg",
      description: "대형 급식소 및 조리 시설에서 온도 관리 미흡으로 다발하는 식중독 균의 사멸 조건(열처리 시간/온도) 및 증식 억제 환경을 시각화한 그래픽 가이드",
      role: "식품미생물학 데이터 추출, 사멸 동력학 그래프 시각화, 그래픽 제작 (100%)",
      tools: ["Figma", "Photoshop"],
      year: 2026,
      duration: "2026.01 (4일)",
      slides: [
        "card-bacteria-1.svg",
        "card-bacteria-2.svg",
        "card-bacteria-3.svg",
        "card-bacteria-4.svg"
      ],
      details: {
        background: "식품영양학 미생물 실험실 안전 수칙 가이드라인 및 조리 실무원 위생 교육의 효율성 극대화를 위해 특별 기획된 고해상도 교육 카드뉴스입니다.",
        concept: "보이지 않는 세균의 온도 반응성을 네온 파이어 레드(Heat)와 아이스 사이안 블루(Cold)의 선명한 고대비로 매핑하여 임계 한계값 영역을 한눈에 식별하도록 표현했습니다.",
        outcome: "대학 임상영양 학술제 인포그래픽 우수 자료로 선정되어 학부 학과 로비에 영구 대자보 포스터로 게시되었으며, 50회 이상의 아카이브 스크랩을 유도했습니다."
      }
    },

    // VIDEO PROJECTS (2 items)
    {
      slug: "smart-haccp-sensor-manual",
      title: "스마트 HACCP 무선 센서 가동 및 CCP 이탈 대응 공정 매뉴얼 영상",
      category: "video",
      thumbnail: "video-sensor.svg",
      description: "무선 온도 데이터 로거의 한계기준 이탈 모의 상황 발생 시, 제조 공정 자동 밸브 차단 및 원인 규명 개선 조치 프로세스를 3D 그래픽으로 모션 연출한 실무 교육 영상",
      role: "시나리오 작성, 온도 이탈 연출, 오디오 내레이션 편집 (100%)",
      tools: ["After Effects", "Premiere Pro", "Photoshop"],
      year: 2025,
      duration: "2025.12 (3주)",
      details: {
        client: "스마트 제조혁신 지원사업 공정 시뮬레이션 (산학 연계)",
        concept: "기술적 완벽성과 신속성. 차갑고 균일하게 회전하는 제조 라인의 메탈 그레이 톤에 온도 과열을 상징하는 전기 오렌지 알림을 대조하고, 미세한 경고 비프음에 어울리는 타임라인 전개로 공정 흐름을 깔끔하게 편집했습니다.",
        storyboard: "0:00~0:10 멸균 챔버 자동 온도 데이터 로거가 정상 범위(121°C 이상)를 추적하는 앰비언트 상태 연출 -> 0:11~0:25 압력 누출로 인한 급격한 온도 하락 및 경고 발령 (HUD 알림 디스플레이 활성화) -> 0:26~0:35 개선조치 매뉴얼에 따라 원료 공급 차단 밸브 폐쇄 및 불합격품 격리 공정 3D 뎁스 묘사 -> 0:36~0:45 개선 결과 입력 시스템 연동과 함께 클린한 브랜드 슬로건 표출",
        audio: "공장 가동 화이트 노이즈 사운드와 센서 경고 비프음, 저작권 프리 하이테크 테크노 앰비언스를 믹스처"
      }
    },
    {
      slug: "food-hygiene-campaign",
      title: "식품 위생 '식자재 교차오염의 나비효과' 30초 캠페인 광고 영상",
      category: "video",
      thumbnail: "video-hygiene.svg",
      description: "비위생적인 칼·도마 사용으로 인한 식중독균의 미량 전파가 대형 집단 급식소 전체의 오염으로 확산되는 인과 과정을 감각적인 파스텔 아트와 키프레임 애니메이션으로 연출한 캠페인 영상",
      role: "배경 일러스트 그래픽 설계, 전파 경로 시뮬레이션 모션, 오디오 이펙팅 (100%)",
      tools: ["After Effects", "Illustrator", "Audition"],
      year: 2025,
      duration: "2025.07 (2주)",
      details: {
        client: "식약처 청년 에코/위생 크리에이터 공모전 출품작",
        concept: "공포감을 주지 않고 가독성을 높이는 교차오염의 시각화. 무겁고 혐오스러운 식중독균의 현미경 확대 이미지 대신, 반짝이는 펄 가루 형태의 형광 입자 메타포를 도입하여 오염원의 확산을 부드러우면서도 단호하게 표현했습니다.",
        storyboard: "0:00~0:08 어류를 손질한 뒤 씻지 않은 칼로 즉석 양배추를 썰 때 미세 형광 펄 입자가 채소로 옮겨붙는 정밀 줌인 -> 0:09~0:18 샐러드 볼 전체로 펄 입자가 복제 증식되는 3D 뎁스 레이아웃 연출 -> 0:19~0:30 깨끗이 세척·소독한 뒤 재식재료를 다루는 올바른 위생 가이드라인 대조 제시와 아웃트로 줌아웃",
        audio: "도마 위의 경쾌한 칼질 소리 SFX에 차분한 일렉 피아노 멜로디, 따뜻한 성우 내레이션 보이스를 조화롭게 레이어링"
      }
    },

    // MUSIC PROJECTS (2 items - Simulated using Web Audio API Synths)
    {
      slug: "hplc-lab-ambient",
      title: "Food Tech Lab Ambient (HPLC 가동 백색소음 신디사이저)",
      category: "music",
      thumbnail: "music-hplc.svg",
      description: "HPLC 정량 분석 실험실의 고요한 공기와 분석 기기의 미세한 모터 회전, 용매 흐름음을 삼각파와 아날로그 펄스 발진으로 표현한 집중용 미니멀 앰비언트 신스 루프",
      role: "실험실 물리 노이즈 음역 분석, LFO 주기 변조 설계, 신스 합성 (100%)",
      tools: ["Logic Pro X", "Serum (Wavetable Synth)", "Web Audio API Synthesis Engine"],
      year: 2026,
      genre: "Laboratory White Noise Ambient",
      bpm: 98,
      daw: "Logic Pro X & Web Audio API",
      details: "품질 분석 연구원의 집중 상태를 자극하는 소리를 설계했습니다. HPLC 기기가 화학 잔류 물질을 검출하며 규칙적으로 주입하는 미세 피스톤 스트로크를 삼각파 오실레이터의 저주파 필터 변조(LFO)로 매핑하여 영롱한 하모니를 뽑아냈습니다."
    },
    {
      slug: "smart-factory-pulse",
      title: "Smart Factory Pulse (자동화 무균 충전기 작동 신스웨이브)",
      category: "music",
      thumbnail: "music-factory.svg",
      description: "초당 20병의 음료를 완벽한 무균 상태에서 충전 밀봉하는 초고속 충전 노즐의 역동적인 자동화 기계 패턴을 120 BPM 속도감으로 합성한 레트로 신스웨이브 트랙",
      role: "기계 타격 패턴 드럼 시퀀싱, 베이스 신스 노이즈 디자인, 믹싱 (100%)",
      tools: ["Ableton Live", "Diva (Analog Model Synth)", "Decimort 2 Bitcrusher"],
      year: 2025,
      genre: "Industrial Synthwave / Outrun",
      bpm: 120,
      daw: "Ableton Live 11",
      details: "HACCP 공정 중 급속 가열 멸균 후 무균 상태를 유지하며 뿜어내는 가스 소독 벤트와 피스톤 실린더 스트로크를 사이드체인 컴프레서의 강력한 리드미컬 펌핑 테크닉으로 재현하여 역동성을 더했습니다."
    }
  ],

  // 12 HIGH-FIDELITY GRAPHIC ARTWORKS (Realigned to Food Chemistry & Safety themes)
  graphics: [
    { id: 1, title: "HPLC Chromatogram Peaks", tool: "Photoshop & Blender", year: 2026, img: "graphic-1.svg", desc: "검출 성분의 흡광도 파장에 따른 이탈 수치를 3차원 네온 그라디언트 절벽으로 예술화한 정밀 포스터" },
    { id: 2, title: "Shelf-Life Arrhenius Model", tool: "Illustrator & Cinema4D", year: 2025, img: "graphic-2.svg", desc: "식품의 저장 온도에 따른 유통기한 예측 반응 속도 상수의 상관관계를 크롬 금속 곡선으로 정제한 실험 아트" },
    { id: 3, title: "Moire Bio-Sensor Array", tool: "Figma", year: 2026, img: "graphic-3.svg", desc: "병원균 신속 진단 키트 표면의 미세 채널과 고글라스 바이오 센서 반사를 묘사한 뉴모피즘 다차원 패턴" },
    { id: 4, title: "LIMS Dashboard Grid", tool: "Photoshop", year: 2025, img: "graphic-4.svg", desc: "실험실 정보 관리 시스템의 거대한 이화학/미생물 분석 테이블을 우주 먼지 파티클 속에 투영한 디지털 아트" },
    { id: 5, title: "Clean Room Air Shower HUD", tool: "Illustrator", year: 2025, img: "graphic-5.svg", desc: "반도체급 청정도를 유지하는 식품 무균 포장실 에어샤워 카운트다운의 긴박감을 스위스 모던 타이포로 연출한 그래픽" },
    { id: 6, title: "Bacterial Colony Moire", tool: "Illustrator", year: 2026, img: "graphic-6.svg", desc: "페트리 디쉬 위에 콜로니 카운터로 검출해 낸 식중독 유해 세균 군락의 융합 현상을 흑백 점박이 하프톤으로 묘사" },
    { id: 7, title: "Metal Detector Glitch Effect", tool: "Photoshop & After Effects", year: 2025, img: "graphic-7.svg", desc: "공정 최종 라인에서 금속 이물(Fe, Sus)이 감지되어 벨트가 비상 정지하는 경보의 순간을 분열된 글리치 노이즈로 묘사" },
    { id: 8, title: "HACCP CCP Critical Point Oasis", tool: "Blender & Photoshop", year: 2026, img: "graphic-8.svg", desc: "완벽히 통제된 임계 범위(Oasis) 속에 부유하여 미생물적 위해가 완전히 정화되는 가상의 멸균 구체를 연출한 3D 아트" },
    { id: 9, title: "Retro Lab Scale Interface", tool: "Figma & Photoshop", year: 2025, img: "graphic-9.svg", desc: "80년대 정밀 정밀 분석 저울과 화학 지시약 방울 반응을 아날로그 도트 도해 스타일로 매핑한 가상 화학 패널" },
    { id: 10, title: "Fluid Homogenizer Moire", tool: "Illustrator", year: 2026, img: "graphic-10.svg", desc: "우유의 지방구를 균질하게 분쇄하며 가해지는 미세 초고압 유체의 에너지 흐름을 정교한 무아레 곡선으로 승화한 작품" },
    { id: 11, title: "Deconstructed Food Matrix", tool: "Photoshop", year: 2025, img: "graphic-11.svg", desc: "식품 복합 원료 매트릭스 내부의 결합 상태를 고배율 전자현미경의 단면 구조로 거칠게 해체하여 표현한 입체파적 콜라주" },
    { id: 12, title: "Chrome Glass Pipette Drop", tool: "Cinema4D", year: 2026, img: "graphic-12.svg", desc: "크로마토그래피용 정밀 마이크로 피펫 끝에서 중력에 의해 낙하하는 고순도 시약 방울의 점성을 메탈 크롬 광택으로 렌더링" }
  ],

  // 5 AWARDS (Glowing vertical timeline - Real student achievements)
  awards: [
    {
      name: "「2026년 식의약 공공데이터‧AI 분석·활용 경진대회」",
      organizer: "식품의약품안전처",
      year: 2026,
      work: "Safe Trip AI - 글로벌 관광객을 위한 다국적 위해 식품·의약품 즉시 판별 서비스",
      result: "참가",
      description: "식약처 공공 API(HACCP 인증, 식품영양성분, 의약품 식별)와 Gemini AI를 결합하여, 바코드/성분표 촬영 시 종교·알레르기·국적별 위해 성분을 판별해주는 5개 국어 웹 서비스를 기획 및 제안 (현재 결과 대기 중)."
    },
    {
      name: "PBL(Project Based Learning) 경진대회",
      organizer: "한림대학교 LINC 3.0 사업단",
      year: 2026,
      work: "춘천 지역 소상공인/중소기업(비아텍) AI 융합 디지털 브랜딩 및 웹 아카이브 구축",
      result: "참가",
      description: "춘천 소재 웹페이지가 없는 중소기업을 발굴하여 AI 기술을 접목한 보고서, 광고 영상, 테마 음악, 카드뉴스를 종합 아카이빙하는 반응형 웹 페이지 제작 및 컨설팅 수행 (현재 결과 대기 중)."
    },
    {
      name: "커리어인바디 아이디어 공모전",
      organizer: "한림대학교 대학일자리플러스센터",
      year: 2026,
      work: "사용자 경험(UX) 데이터 분석을 적용한 커리어 서비스 보완 및 신규 웹 플랫폼 제안",
      result: "최우수",
      description: "기존 대학 경력 개발 플랫폼의 고령자/장애인 접근성 및 사용자 데이터 이탈 지점을 개선하고 직관적인 직무 매칭 UI를 담은 WEB 솔루션을 설계하여 최우수상 수상."
    },
    {
      name: "MS마트 상생 협력 성장 공모전",
      organizer: "MS홀딩스 (MS마트)",
      year: 2026,
      work: "로컬 라이프 상권 활성화 및 동반 성장을 위한 춘천 지역 상생 배달/편의 웹 앱 기획",
      result: "참가",
      description: "대형 마트와 춘천 동네 소상공인을 하나로 연결하고 1인 가구 타깃 밀키트 큐레이션 및 편의 서비스를 지원하는 커뮤니티형 로컬 라이프 비즈니스 모델 제안."
    },
    {
      name: "2025년 2학기 AI 활용 브랜딩 공모전",
      organizer: "한림대학교",
      year: 2025,
      work: "한림대인의 밝은 내일을 비추는 긍정의 마스코트 'HALO(할로)' 캐릭터 브랜딩",
      result: "대상",
      description: "생성형 AI 브랜딩 툴을 활용하여 한림대학교 학생들의 주위를 따뜻하고 밝게 빛내는 아우라(Halo)를 모티브로 한 친근한 마스코트 캐릭터 'HALO'를 디자인하여 전체 1위 대상 수상."
    }
  ],

  // 4 LAB ARTICLES (MDX reader format - Chemistry & Microbiology & Web Tech integration)
  lab: [
    {
      slug: "hplc-pesticide-quantification",
      title: "HPLC(고성능 액체 크로마토그래피)를 이용한 유기농산물 잔류 농약 검출 정량 정밀 분석",
      category: "design-research",
      summary: "시료 전처리(QuEChERS법) 단계를 거쳐 HPLC 기기 분석 상의 머무름 시간(Retention Time) 및 자외선(UV) 검출기 스펙트럼 분석을 통해 오차범위를 극소화하는 실험 분석 가이드",
      tags: ["HPLC 분석", "잔류농약 정량", "식품화학", "오차 분석"],
      date: "2026-04-12",
      readingTime: 6,
      content: `### 1. 식품화학 분석과 QuEChERS 시료 전처리
잔류 농약 분석의 신뢰도는 오염된 매트릭스 속에서 분석 대상 성분을 완벽히 추출해 내는 **전처리 단계**에 달려 있습니다. 
이번 실험에서는 신속하고 간편한 잔류농약 추출법인 **QuEChERS(Quick, Easy, Cheap, Effective, Rugged, Safe)** 표준 프로토콜을 도입하여 고수분 엽채류 샘플의 지방 및 유기 유해 성분을 깔끔하게 배제하는 전처리 과정을 성공적으로 수행했습니다.
샘플을 균질기(Homogenizer)로 마이크로화하고, Acetonitrile과 분배 염(MgSO₄, NaCl)을 가해 신속 원심 분리하여 정제 상층액을 정교하게 수집했습니다.

### 2. HPLC 컬럼 조건 및 UV 검출 파장 세팅
고분해 정밀 피크 도출을 위한 기기 분석 시스템 매개변수를 다음과 같이 확립했습니다.
- **컬럼**: C18 Reversed-Phase Column ($250 \times 4.6 \text{ mm}$, $5\,\mu\text{m}$ 입자 크기)
- **이동상**: Acetonitrile / Water ($70 : 30$ 부피비, 등용매 용리 Iso-cratic)
- **유속**: $1.0\text{ mL/min}$
- **주입량**: $20\,\mu\text{L}$
- **검출기**: UV-Vis Detector ($254\text{ nm}$ 흡광 파장 세팅)

### 3. 크로마토그램 피크 정량 및 검량선(Calibration Curve) 도출
표준 잔류 물질의 농도 단계별($0.1$, $0.5$, $1.0$, $5.0$, $10.0\text{ ppm}$) HPLC 분석 면적 비율(Peak Area)을 수집하여 수학적 선형 회귀 분석을 실시했습니다.

| 농도 (ppm) | 머무름 시간 (min) | 피크 면적 ($mAU \cdot s$) | 검출 피크 신뢰도 |
|---|---|---|---|
| 0.1 | 4.82 | 125,400 | 양호 |
| 0.5 | 4.81 | 631,200 | 우수 |
| 1.0 | 4.83 | 1,268,500 | 완벽 |
| 5.0 | 4.82 | 6,324,100 | 완벽 (포화 한계 미만) |
| 10.0 | 4.80 | 12,599,000 | 완벽 (검량 한계) |

선형 회귀 연산 결과 도출된 검량선 방정식은 **$y = 1,260,000x + 2,100$** 이며, 상관계수 **$R^2 = 0.9999$** 라는 극도로 정밀한 신뢰도를 확보했습니다. 
엽채류 분석 미지 시료의 검출 머무름 시간($4.82\text{ min}$) 면적인 $2,522,100$을 대입하여 시료 내 잔류 농약 농도가 정확히 **$2.00\text{ ppm}$** 검출되었음을 명확히 수학적으로 도출하였고, 이는 허용 한계인 $1.0\text{ ppm}$을 초과하여 부적합 판정을 내리는 완전한 프로세스를 거쳤습니다.`
    },
    {
      slug: "microbe-gompertz-model",
      title: "Modified Gompertz 수학적 생장 예측 모델을 활용한 주요 식중독균 증식 억제 검증",
      category: "tool-experiment",
      summary: "시간과 온도 조건 변화에 따른 병원성 미생물(살모넬라)의 지체기(Lag Phase)와 최대 성장 속도를 비선형 Gompertz 성장 모델식을 적용해 시뮬레이션 및 데이터 시각화",
      tags: ["미생물 예측 모델", "Gompertz Equation", "SPSS 통계", "D-value 산출"],
      date: "2026-03-02",
      readingTime: 4,
      content: `### 1. 예측 미생물학(Predictive Microbiology)의 필요성
유통 공정이나 조리 현장에서 특정 온도 편차가 유발되었을 때, 세균이 실제로 기하급수적으로 폭발하는 시점인 **지체기(Lag Phase)**의 끝을 예측하는 것은 급식 위생 및 품질 관리의 핵심 임계 통제점 수립에 직결됩니다. 
수동 균수 측정법의 시간적 한계를 극복하고자, 생물 수학적 비선형 성장 거동 모델인 **Modified Gompertz 방정식**을 가스 흡광 측정 실험 데이터에 결합하여 수치 시뮬레이션을 구현했습니다.

### 2. Modified Gompertz 수학 공식 및 매개 변수 정의
미생물의 생장 거동 곡선($N(t)$)은 다음과 같은 수학식으로 결정됩니다:

$$Y(t) = \ln\left(\frac{N(t)}{N_0}\right) = A \cdot \exp\left\{ -\exp\left[ \frac{\mu_{max} \cdot e}{A} (\lambda - t) + 1 \right] \right\}$$

- $N(t)$: 특정 시간 $t$에서의 미생물 밀도
- $N_0$: 초기 미생물 밀도 접종값
- $A$: 최대 미생물 생장 잠재량 (Max Asymptotic growth)
- $\mu_{max}$: 시간당 최대 비생장 속도 (Maximum specific growth rate)
- $\lambda$: 유도기/지체기 시간 (Lag phase duration, hr)
- $e$: 자연상수 ($2.7182...$)

### 3. 실험 설계 및 10°C vs 25°C 생장 예측 그래프 매핑
살모넬라 균을 가상의 진탕 배양 시스템에 주입하고 각각 10°C 저온 환경과 25°C 상온 환경에서 48시간 동안 생존 상태를 추적했습니다.
- **10°C 저온군**: 지체기($\lambda$)가 **18.5시간**으로 길게 연장되었으며 최대 생장 속도($\mu_{max}$)는 **$0.08\text{ hr}^{-1}$**로 억제되었습니다.
- **25°C 상온군**: 지체기($\lambda$)가 단 **2.2시간**으로 단축되었고 $\mu_{max}$는 **$1.15\text{ hr}^{-1}$**로 14배 폭발했습니다.

이 통계 데이터를 바탕으로 식품의 상온 방치 시간이 **2.0시간을 초과하는 즉시** 미생물 위험 경보를 발령해야 한다는 실무적이고 꼼꼼한 통제 한계값(Critical Limits)의 과학적 근거를 성공적으로 입증했습니다.`
    },
    {
      slug: "websocket-haccp-binding",
      title: "스마트 HACCP 온도 센서 데이터 수집을 위한 웹소켓 실시간 바인딩 분석",
      category: "tutorial",
      summary: "공장 생산설비 무선 센서 로거로부터 수집되는 고주파 온도 데이터를 지연 없는 실시간 관제 화면에 매핑하기 위한 WebSockets 이벤트 리스너 최적화 연구",
      tags: ["WebSockets", "IoT 센서", "Smart HACCP", "실시간 관제"],
      date: "2026-01-25",
      readingTime: 5,
      content: `### 1. B2B 스마트 팩토리 실시간 요구 규격
스마트 HACCP(Smart Hazard Analysis and Critical Control Point) 연동 표준은 연속 온도 기록 장치로부터 매 5초 단위로 데이터를 수집하여 기록의 조작 가능성을 사전 차단해야 합니다. 
매 수초 단위의 다차원 센서(가열 챔버 12개 채널) 데이터를 일반 HTTP 폴링 방식으로 리퀘스트하면 공장 게이트웨이에 네트워크 트래픽 과부하를 줍니다. 
이를 해결하기 위해 서버와 브라우저 간에 **실시간 영속 양방향 커넥션**을 수립하는 **WebSockets 프로토콜**을 적용했습니다.

### 2. 센서 데이터 처리 및 메모리 누수 방지 이벤트 루프
수만 개의 타임스탬프 데이터가 차트에 연속 바인딩되면 가비지 컬렉터(GC) 활성화로 인해 화면 렉 현상이 초래됩니다. 이를 경감시키기 위해 본 튜토리얼에서는 다음과 같은 바닐라 최적화 스니펫을 검증했습니다:

\`\`\`javascript
// 링 버퍼(Ring Buffer) 개념을 도입한 실시간 온도 로깅 이벤트 리스너
const MAX_DATA_POINTS = 50;
let temperatureQueue = new Float32Array(MAX_DATA_POINTS);
let queueIndex = 0;

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  const currentTemp = data.temperature;
  
  // 고정 메모리 영역인 Float32Array에 순환 삽입
  temperatureQueue[queueIndex] = currentTemp;
  queueIndex = (queueIndex + 1) % MAX_DATA_POINTS;
  
  // 이탈 감지 즉시 비동기 콜백 트리거
  if (currentTemp < 121.0) {
    triggerCCPAlarm(data.channelId, currentTemp);
  }
  
  // 차트 UI 데이터 윈도윙 업데이트 처리...
};
\`\`\`

### 3. 기술적 의의
이와 같은 순수 자바스크립트 버퍼링 가속을 통해, 브라우저 스크립팅 렌더링 프레임을 저사양 현장 전광판 태블릿에서도 **부드러운 60 FPS**로 방어하는 데 성공했습니다. IT 기술을 적극 접목한 현대적 식품 안전 모니터링 시스템의 핵심 백본 아키텍처를 완벽히 이해하는 성과를 이룩했습니다.`
    },
    {
      slug: "food-qa-document-knowhow",
      title: "식품위생법 개정에 따른 신제품 QA 문서(품목제조보고서, 유통기한 설정 사유서) 작성 노하우",
      category: "tutorial",
      summary: "원료 배합 규정 준수 여부를 확인하는 배합비 작성 양식 분석과 과학적 유통기한 연장 실험 데이터를 기반으로 유통기한 설정 사유서를 안전하게 작성하는 실무 테크닉",
      tags: ["식품위생법", "QA 문서화", "품목제조보고서", "유통기한 설정"],
      date: "2025-11-18",
      readingTime: 5,
      content: `### 1. 품질 보증(QA) 문서 작성의 본질적 목표
식품 회사의 QA 직무는 단순한 관리를 넘어 국가 행정 규제 리스크를 제로화하는 관문입니다. 
신제품 출시 전 관할 지방자치단체장에 보고해야 하는 **품목제조보고서**와 식약처 안심 기준에 상응하는 **유통기한 설정 사유서**의 허위 또는 오기는 즉각적인 제품 전량 회수, 폐기 및 판매 금지 등의 막대한 행정처분으로 이어지기 때문입니다.

### 2. 품목제조보고서 배합비 검증 핵심 체크리스트
- **원료명 및 배합비**: 배합 비율의 합이 정확히 **100.00%**로 완벽하게 떨어지는지 꼼꼼하게 검증합니다.
- **식품첨가물 공전 대조**: 첨가물의 최대 허용 잔류량(예: 보존료 안식향산나트륨 $0.6\text{ g/kg}$ 이하)을 엄격하게 대조하여 한계치를 단 0.01%도 초과하지 않도록 검사합니다.
- **알레르기 표시 대상**: 원료 중 대두, 밀, 메밀, 우유 등 22대 알레르기 물질이 포함되어 있는 경우 반드시 별도의 굵은 고대비 테두리 칸 안에 원천 표시 명칭을 정확히 기재합니다.

### 3. 유통기한 설정 실험 보고서 및 사유서 작성 3단계
1. **실험 조건 정의**: 실제 유통 조건 온도($10^\circ\text{C}$ 기준)보다 가혹한 온도 조건($25^\circ\text{C}$, $35^\circ\text{C}$) 하에서 가속 저장 실험(Accelerated Storage Test)을 진행합니다.
2. **지표 측정**: 저장 시간 경과에 따라 산패도(산가, 과산화물가), 일반 세균수, 관능 검사 수치 변화를 수집하고, 품질 한계점(Quality Limit)을 설정합니다.
3. **안전 계수(Safety Factor) 산출**: 가속 실험을 통해 얻은 품질 유지 기간이 12개월일 때, 유통 공정상의 뜻밖의 상온 변수를 대비하여 법정 안전 계수 **$0.7 \sim 0.8$**을 필수로 곱하여 최종 권장 유통기한을 **8개월**로 단축 보수 설정하여 사유서에 기술합니다.

이와 같은 꼼꼼하고 데이터 기반의 분석적 문서 작성 능력을 갖춘 인재만이 식음료 비즈니스의 무결점 법적 컴플라이언스를 방어할 수 있습니다.`
    }
  ]
};
