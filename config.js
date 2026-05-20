// central portfolio configuration system for 신현경 (Shin Hyungyeong)
const PORTFOLIO_CONFIG = {
  profile: {
    name: "신현경",
    englishName: "Shin Hyungyeong",
    title: "바이오 R&D 연구원을 목표로 나아가는, 신현경입니다.",
    subTitle: "임상적 이해와 능동적 실행력을 갖춘 바이오 품질·연구 전문가",
    statusBadge: "🟢 바이오 R&D & QA 신입 채용 지원",
    status: "active", // active, flexible, closed
    bio: "식품영양학을 전공하며 HbA1c가 왜 당뇨의 지표인지, TSH가 왜 기초대사율과 연결되는지를 배웠습니다. 저는 이 임상적 이해가 진단키트를 만드는 사람에게 가장 강력한 무기라고 생각합니다. 단순히 수치를 측정하는 것을 넘어, 그 수치가 가진 의미까지 설계할 수 있기 때문입니다. 전공의 한계를 느낄 때마다 기다리지 않고 직접 채워온 도전자로서, 실험·현장·데이터 세 가지 축을 스스로 빌드업하며 바이오 R&D 연구원을 향해 나아가고 있습니다.\n\n🧪 실험 역량\n캡스톤 프로젝트에서 교수님과 1대1로 단백질 정제부터 Western Blot까지 전 과정 수행. 1차·2차 항체 최적화, 블로킹 조건 변경, 비특이 밴드 제어를 통해 R&D의 본질인 반복과 최적화를 직접 체득.\n\n🏭 현장 실무\n바이오 생산장비 부트캠프(2주) 수료. GMP 기초이론, 정제·캡슐 제조 실습, 품질관리 실습을 통해 R&D에서 생산으로 이어지는 공정 전체를 경험.\n\n🤖 AI·데이터\nVIBE 코딩 활용 공모전 대상·최우수상 수상. 식약처 공공 API 활용 5개국어 식품 판별 웹(SAFETRIP), 복약 대조 시스템(PharmaGuard AI) 직접 개발. R언어로 식의약품 1,000개 데이터 분석.\n\n영양학의 임상적 통찰 + 실험 역량 + AI 데이터 분석.\n세 가지를 하나로 연결해 바이오 R&D 연구원으로 성장하겠습니다.",
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
      { name: "바이오 생산 장비 견학", level: 80, status: "GMP 공정견학 완료" }
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
    }
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

  // Lab notes — 실제 내용으로 채워주세요
  lab: [
    {
      slug: "how-to-write-lab-note",
      title: "✏️ 이곳에 나만의 학습 노트를 작성해보세요",
      category: "guide",
      summary: "config.js의 lab 배열에 항목을 추가하면 이 섹션에 카드로 표시됩니다. 아래 작성 가이드를 읽고 실제 경험한 실험, 공부 내용, 프로젝트 회고 등을 자유롭게 기록해보세요.",
      tags: ["작성 가이드", "Lab Notes"],
      date: "2026-05-21",
      readingTime: 2,
      content: `### Lab Note 작성 가이드

#### 어떤 내용을 쓰면 좋을까요?
- **실험 / 분석 기록** — Western Blot, HPLC, 균 배양 등 직접 수행한 실험 결과와 배운 점
- **공부 정리** — 수업이나 자격증 공부에서 새롭게 알게 된 개념 (GMP, HACCP, 생화학 등)
- **프로젝트 회고** — 제작한 웹 앱이나 공모전 출품 후 느낀 점과 개선 아이디어
- **도전 기록** — 부트캠프, 캡스톤, 인턴 등 새로운 경험에서 배운 것

#### 작성 형식 (config.js → lab 배열에 추가)

\`\`\`javascript
{
  slug: "고유-영문-id",         // 예: "western-blot-review"
  title: "노트 제목",
  category: "카테고리",         // 예: "실험 기록", "공부 정리", "프로젝트 회고"
  summary: "카드에 표시될 한 줄 요약",
  tags: ["태그1", "태그2"],
  date: "YYYY-MM-DD",
  readingTime: 3,              // 예상 읽기 시간 (분)
  content: \`
### 소제목
본문 내용을 여기에 작성합니다.

- **핵심 포인트**: 설명
- 배운 점, 느낀 점, 결과 등을 자유롭게 기록하세요.
  \`
}
\`\`\`

#### 카테고리 예시
| 카테고리 | 어울리는 내용 |
|---|---|
| 실험 기록 | 직접 수행한 실험 과정과 결과 |
| 공부 정리 | 수업·자격증·책에서 정리한 개념 |
| 프로젝트 회고 | 제작물 완성 후 돌아보는 기록 |
| 도전 기록 | 새로운 경험과 성장 스토리 |`
    }
  ]
};
