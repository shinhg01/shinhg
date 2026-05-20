# Antigravity 프롬프트 — 취업용 멀티미디어 포트폴리오 웹사이트

> 사용 방법: 아래 전체 텍스트를 복사해서 Antigravity 첫 프롬프트로 붙여넣고, [대괄호] 안 placeholder만 본인 정보로 교체하세요. Antigravity가 추가 질문을 하면, 본인 작업물 정보를 그때그때 보충해 주면 됩니다.

---

## 0. 너의 역할 (Role)
너는 시니어 풀스택 웹 개발자이자 UI/UX 디자이너야. 채용 담당자가 5분 안에 지원자의 핵심 역량을 파악할 수 있게 만드는 **고품질 개인 포트폴리오 웹사이트**를 처음부터 끝까지 설계·구현해줘. 단순한 템플릿이 아니라, Awwwards에 출품해도 어색하지 않은 수준의 디자인 디테일과 마이크로 인터랙션을 갖춰야 해.

---

## 1. 프로젝트 개요

- **목적**: 대학교 4학년 학생의 **취업용 개인 포트폴리오 웹사이트** 제작
- **타깃 방문자**: 기업 채용 담당자, 인사 담당자, 잠재 협업자, 멘토
- **사용자(나)**: 
  - 이름: [신현경]
  - 학교/전공: [한림대학교 / 식품영양학전공 경영학과 복수전공]
  - 졸업 예정: [2027년 02월]
  - 희망 직무: [예: QC, QA]
- **핵심 메시지**: "데이터를 식품영양학 기반 품질 전문가"
- **방문 후 기대 행동**: 채용 담당자가 이력서 PDF를 다운로드하거나 이메일로 연락하기

---

## 2. 디자인 방향

### 2-1. 무드 & 컨셉
- 키워드: **모던 / 미니멀 / 크리에이티브 / 인터랙티브 / 다크모드 베이스**
- 분위기: 차분하지만 개성 있는, "이 사람만의 색"이 보이는 디자인
- 레퍼런스 스타일:
  - Brittany Chiang (brittanychiang.com) — 깔끔한 정보 구조
  - Bruno Simon (bruno-simon.com) — 인터랙티브 요소
  - Tobias van Schneider, Awwwards SOTD 수상작들
- 절대 피할 것: Bootstrap 디폴트 느낌, 진부한 그라데이션, 생성형 AI 티 나는 일반적 레이아웃

### 2-2. 컬러 팔레트 (다크 모드 기본)
- Background: `#0A0A0F` (거의 검정에 가까운 딥 네이비)
- Surface: `#14141C`
- Text Primary: `#F5F5F7`
- Text Secondary: `#9CA3AF`
- Accent (포인트 컬러): [선호하는 컬러 1가지 선택 — 예: 네온 그린 `#00FF94` / 일렉트릭 블루 `#3B82F6` / 비비드 오렌지 `#FF6B35`]
- Border: `#27272A`
- 라이트 모드는 같은 톤의 반전 버전으로 자동 생성

### 2-3. 타이포그래피
- 한글 헤딩 & 본문: **Pretendard Variable** (필수, 한글 가독성 최우선)
- 영문 헤딩: **Space Grotesk** 또는 **Inter Tight**
- 숫자·코드: **JetBrains Mono**
- 위계: H1 64–80px / H2 40–48px / H3 24–28px / Body 16–18px / Caption 13–14px
- 줄간격: 본문 1.6, 헤딩 1.2

### 2-4. 레이아웃
- 12-column 그리드 기반의 **비대칭 레이아웃**
- 충분한 화이트 스페이스(섹션 상하 패딩 최소 120px)
- 스크롤에 따른 컴포넌트 등장 애니메이션
- 마우스 호버 시 미세한 마이크로 인터랙션 (커서 추적, 텍스트 글리치, 이미지 줌 등)

---

## 3. 사이트 구조 (Information Architecture)

원페이지 스크롤 + 작품별 상세 페이지 라우팅 하이브리드. 상단 고정 네비게이션에 다음 앵커:
`Home / About / Skills / Works / Awards / Lab / Contact`

### 3-1. Hero
- 큰 타이포그래피로 한 줄 카피
  - 예: "I design moments that move people."
  - 한국어 서브: "웹, 영상, 음악, 이미지를 넘나드는 멀티미디어 크리에이터 [이름]"
- 우측에 짧은 자기소개 (2-3 문장)
- 백그라운드: WebGL 기반 인터랙티브 파티클 또는 미세한 노이즈 그라데이션
- 스크롤 다운 인디케이터

### 3-2. About Me
- 좌측: 프로필 사진 또는 일러스트 (원형/마스킹 처리)
- 우측: 
  - 자기소개 텍스트 (250–350자, 스토리텔링 톤)
  - 학력 정보
  - 관심 분야 태그
  - **이력서 PDF 다운로드 버튼**
- 한 줄 가치관 인용구

### 3-3. Skills
카테고리별 그리드 카드로 구성. 호버 시 숙련도 / 사용 기간 표시.
- **Design**: Figma, Photoshop, Illustrator, InDesign
- **Video**: Premiere Pro, After Effects, DaVinci Resolve
- **Audio/Music**: Logic Pro, Ableton Live, FL Studio
- **Web/Code**: HTML, CSS, JavaScript, React, [기타]
- **Soft Skills**: 기획, 협업, 발표, 영어 [등]

### 3-4. Works (포트폴리오 — 핵심 섹션)
상단에 **카테고리 필터 탭**: `All / Web / Card News / Video / Music / Image`
선택 시 그리드가 부드럽게 재배치 (Framer Motion `layout` prop).

각 작품 카드 호버 시 썸네일 줌 + 제목·연도·툴 표시. 클릭 시 상세 모달 또는 `/works/[slug]` 페이지로 이동.

#### A. Web Project
- 실제 스크린샷 / 데스크탑·모바일 목업
- 프로젝트명, 한 줄 설명, 사용 기술 스택, 본인 역할, 제작 기간
- 케이스 스터디 구조: **문제 정의 → 리서치 → 디자인/개발 과정 → 결과 → 회고**
- Live 데모 & GitHub 링크

#### B. Card News
- Instagram 스타일 **1:1 캐러셀 뷰어** (좌우 스와이프 / 화살표 / 키보드 ← →)
- 주제, 제작 배경, 타깃, 도달 성과 (인스타에 올렸다면 좋아요·도달 수)
- 카드 다운로드 옵션

#### C. Ad Video (광고 영상)
- 16:9 비디오 플레이어 (YouTube/Vimeo 임베드 또는 자체 호스팅)
- 썸네일 호버 시 5초 음소거 미리보기 재생
- 클라이언트(또는 가상 브리프), 컨셉, 스토리보드, 제작 의도, 사용 BGM/SFX 정보

#### D. Music
- 커스텀 오디오 플레이어 (재생/일시정지/시킹 + 파형 시각화 — wavesurfer.js)
- 트랙명, 장르, BPM, 사용 DAW, 제작 의도
- SoundCloud / Spotify 임베드 옵션 병행

#### E. Image / Graphic
- 메소너리(Masonry) 그리드 갤러리
- 클릭 시 라이트박스 모달 (좌우 키 네비게이션)
- 작품 메타: 제목, 제작 도구, 연도, 컨셉 설명

### 3-5. Awards & Competitions (공모전 & 수상 내역)
- **수직 타임라인** 형식 (최신순 위에서 아래로)
- 각 항목 카드:
  - 공모전명, 주최기관, 연도
  - 출품작 썸네일
  - 결과 배지 (대상 / 최우수 / 우수 / 장려 / 입선 / 참가)
  - 한 줄 회고 또는 출품작 설명
  - 클릭 시 출품작 상세 모달
- 수상 증서 / 트로피 이미지 갤러리 옵션

### 3-6. Lab (학습 노트 & 실험 활동)
- **블로그 + 실험실** 느낌의 노트 아카이브
- 카테고리: `Design Research / Tool Experiment / Book Notes / Tutorial Reproduction / [기타]`
- 각 노트 카드: 제목, 한 줄 요약, 날짜, 태그, 읽는 데 걸리는 시간
- 본문은 **MDX 기반** 으로 작성 (코드 블록, 이미지, 비디오 임베드 지원)
- 태그·카테고리·검색 필터 제공

### 3-7. Contact
- 큰 헤드라인: "Let's create something together."
- 좌측: 이메일, 인스타그램, GitHub, LinkedIn, Behance 링크 (아이콘 + 호버 효과)
- 우측: 간단한 문의 폼 (이름, 이메일, 메시지)
- 폼 전송: Resend 또는 Formspree 연동
- 현재 상태 배지: "🟢 인턴십/정규직 포지션 오픈" 또는 "🟡 외주 협업 가능"

### 3-8. Footer
- 카피라이트, 마지막 업데이트 일자, "Made with Next.js & ☕ by [이름]"

---

## 4. 기능 요구사항

- ✅ 완전 반응형 (Mobile-first, breakpoints: 640 / 768 / 1024 / 1280 / 1536)
- ✅ 다크 / 라이트 모드 토글 + 시스템 설정 자동 감지
- ✅ 한국어 / 영어 i18n (next-intl 추천)
- ✅ 스크롤 기반 등장 애니메이션 (Framer Motion `useInView`)
- ✅ 페이지 라우팅 시 부드러운 트랜지션
- ✅ 이미지 최적화 (`next/image`, lazy loading, blur placeholder)
- ✅ SEO: 메타 태그, Open Graph, Twitter Card, JSON-LD, sitemap.xml, robots.txt
- ✅ 접근성: WCAG 2.1 AA 준수, 키보드 네비게이션, semantic HTML, aria 속성
- ✅ 분석: Vercel Analytics 또는 Plausible (개인정보 친화적)
- ✅ Lighthouse 점수: Performance / Accessibility / Best Practices / SEO 모두 90+
- ✅ 메타 이미지(OG image) 동적 생성 (`/api/og`)

---

## 5. 기술 스택

- **프레임워크**: Next.js 14 (App Router) + TypeScript (strict mode)
- **스타일링**: Tailwind CSS + shadcn/ui
- **애니메이션**: Framer Motion (필요 시 GSAP)
- **3D / WebGL** (선택): React Three Fiber
- **콘텐츠**: MDX + Contentlayer (작품·노트·수상 내역을 모두 파일 기반으로 관리)
- **폼**: React Hook Form + Zod 검증
- **배포**: Vercel
- **이미지 호스팅**: Vercel Image / Cloudinary
- **폰트**: `next/font` 로 Pretendard, Space Grotesk, JetBrains Mono 셀프 호스팅

---

## 6. 콘텐츠 데이터 모델

다음 TypeScript 인터페이스를 기반으로 콘텐츠 폴더 구조와 더미 데이터를 만들어줘:

```ts
type Category = 'web' | 'cardnews' | 'video' | 'music' | 'image';

interface Project {
  slug: string;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;        // 한 줄 설명
  role: string;               // 본인 역할
  tools: string[];            // 사용 도구
  year: number;
  duration?: string;          // 제작 기간
  links?: { live?: string; github?: string; behance?: string };
  gallery?: string[];         // 상세 이미지/비디오 URL 배열
  caseStudy?: {               // 케이스 스터디 (선택)
    problem: string;
    process: string;
    result: string;
    retrospective: string;
  };
}

interface Competition {
  name: string;
  organizer: string;
  year: number;
  work: string;               // 출품작 제목
  result: '대상' | '최우수' | '우수' | '장려' | '입선' | '참가';
  certificate?: string;       // 수상 증서 이미지 URL
  description: string;        // 한 줄 회고
}

interface Note {
  slug: string;
  title: string;
  category: 'design-research' | 'tool-experiment' | 'book-notes' | 'tutorial' | 'etc';
  summary: string;
  content: string;            // MDX
  tags: string[];
  date: string;               // ISO 8601
  readingTime: number;        // 분 단위
}
```

---

## 7. 결과물 요구

1. 위 사양을 모두 충족하는 **풀스택 Next.js 프로젝트 코드 일체**를 작성해줘.
2. 모든 섹션을 **그럴듯한 더미 데이터로 가득 채워서** 시연 가능한 상태로 만들어줘. (작품 8개, 카드뉴스 3세트, 영상 2개, 음악 2곡, 이미지 12장, 수상 5건, Lab 노트 4개)
3. **README.md** 에 다음을 명시: 로컬 실행 방법, 콘텐츠 추가/수정 방법(MDX 파일 경로), Vercel 배포 단계.
4. **CMS 없이도** MDX 파일과 JSON / frontmatter 만 수정하면 콘텐츠가 즉시 갱신되도록 설계.
5. 작업 순서: ① 프로젝트 초기 세팅 → ② 디자인 토큰·타이포 시스템 → ③ 공통 컴포넌트(Nav, Footer, Card) → ④ 페이지 섹션 순차 구현 → ⑤ 애니메이션·인터랙션 → ⑥ SEO·접근성·성능 최적화.
6. 단계마다 어떤 결정을 왜 내렸는지 짧게 코멘트로 설명해줘.

---

## 8. 추가 정보 / Placeholder 채우기

Antigravity가 본격적으로 시작하기 전에, 아래 정보를 나에게 다시 물어봐줘 (필요 시):

- [ ] 본명(또는 닉네임), 한 줄 자기소개
- [ ] 학교 / 전공 / 졸업 예정 시기
- [ ] 희망 직무 / 산업 분야
- [ ] 보유 작품 실제 목록 (제목·카테고리·간단한 설명)
- [ ] 수상 내역 실제 목록
- [ ] 선호하는 포인트 컬러
- [ ] 참고 사이트 URL 3–5개
- [ ] 도메인 / SNS 핸들

준비됐으면 **Step 1: 프로젝트 초기 세팅**부터 시작하고, 단계 종료마다 미리보기 스크린샷 또는 컴포넌트 트리를 보여줘.
