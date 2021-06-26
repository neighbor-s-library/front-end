# 개발 환경
- [Node](https://nodejs.org/ko/docs/guides/) 10버전 이상
- [React](https://ko.reactjs.org/)
- [Cloudinary](https://cloudinary.com/)
- [Firebase](https://firebase.google.com/docs?hl=ko)
- [axios](https://github.com/axios/axios)
- [Docker](https://www.docker.com/)

# 실행 방법
1, 깃허브 다운받기

    git clone https://github.com/neighbor-s-library/front-end.git
package.json 에서 정의된 Node.JS 구동에 필요한 위한 라이브러리들.
    
    "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "axios": "^0.21.1",
    "dot-env": "0.0.1",
    "firebase": "^8.6.7",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
     }
2, 구동에 필요한 라이브러리들 추가하기

    npm install

3, 노드로 프론트 웹서버 실행

    npm start


# 라이브러리 설명

## React
![스크린샷 2021-06-26 오후 9 41 57](https://user-images.githubusercontent.com/65009591/123513920-dcbc5500-d6ca-11eb-9ae4-779855b3fab6.png)

## React의 필요성?
react를 사용하지 않아도, html과 css, javascript를 이용해서 웹 페이지를 만들 수 있지만, react를 이용해 사용자와 상호작용할 수 있는 동적인 UI를 쉽게 만들 수 있기 때문에 많이 이용되는 것 같습니다..!

## React의 특징
React의 특징은 크게 다음과 같이 구분해보았습니다.
- Data Flow
- Component 기반 구조
- Virtual Dom
- Props and State

### 1. Data Flow
React는 데이터의 흐름이 한 방향으로만 흐르는 단방향 데이터 흐름을 가집니다.

Augular.js와 같은 양방향 데이터 바인딩은 규모가 커질수록(대규모 애플리케이션의 경우) 데이터의 흐름을 추적하기가 힘들고 복잡해지는 경향이 있어, 복잡한 앱에서도 데이터 흐름에서 일어나는 변화를 보다 예측 가능할 수 있도록 단방향 흐름을 가지도록 했다고 합니다.


### 2. Component 기반 구조
Component는 독립적인 단위의 소프트웨어 모듈을 말합니다.
즉, 소프트웨어를 독립적인 하나의 부품으로 만드는 방법이라고 볼 수 있습니다.

React는 UI(View)를 여러 컴포넌트(component)를 쪼개서 만듭니다.
한 페이지 내에서도 여러 각 부분을 독립된 컴포넌트로 만들고, 이 컴포넌트를 조립해 화면을 구성합니다.

컴포넌트 단위로 쪼개져 있기 때문에, 전체 코드를 파악하기가 상대적으로 쉽습니다. 이렇게 기능 단위, UI 단위로 캡슐화시켜 코드를 관리하기 때문에 재사용성이 높습니다. 따라서 코드는 반복해 입력할 필요 없이, 컴포넌트만 import해 사용하면 된다는 간편함이 있으며, 애플리케이션이 복잡해지더라도 코드의 유지보수, 관리가 용이해지는 장점을 가집니다.

    const App = () => {
      render() {
        return (
          <Layout>
            <Header />
            <Navigation />
            <Content>
              <Sidebar></Sidebar>
              <Router />
            </Content>
            <Footer></Footer>
          </Layout>
        );
      }
    }
위와 같이 Header, Footer같은 구조등을 컴포넌트로 만들고, 이를 조합해서 root component를 만드는 방식입니다.

### 3. Virtual DOM
먼저, DOM은 Document Object Model의 약자입니다.
DOM은 html, xml, CSS 등을 트리 구조로 인식하고, 데이터를 객체로 간주하고 관리합니다.

React는 이 DOM Tree 구조와 같은 구조체를 Virtual DOM으로 가지고 있습니다.

Virtual DOM은 가상의 Document Object Model을 말합니다

이벤트가 발생할 때마다 Virtual DOM을 만들고, 다시 그릴 때마다 실제 DOM과 비교하고 전후 상태를 비교해, 변경이 필요한 최소한의 변경사항만 실제 DOM에 반영해, 앱의 효율성과 속도를 개선할 수 있다고 합니다.


### 4. Props and State
Props
Props란 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터를 말합니다.
쉽게 읽기 전용 데이터라고 생각하면 될 것 같습니다! 자식 컴포넌트에서 전달받은 props는 변경이 불가능하고 props를 전달해준 최상위 부모 컴포넌트만 props를 변경할 수 있습니다.

State
State는 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있습니다. state는 동적인 데이터를 다룰 때 사용하며, 사용자와의 상호작용을 통해 데이터를 동적으로 변경할 때 사용합니다. 클래스형 컴포넌트에서만 사용할 수 있고, 각각의 state는 독립적입니다.

출처: https://velog.io/@jini_eun/React-React.js%EB%9E%80-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC

---

# Docker
![스크린샷 2021-06-26 오후 10 04 46](https://user-images.githubusercontent.com/65009591/123513966-13926b00-d6cb-11eb-9091-77a17d9ee7bb.png)

Docker는 애플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼입니다. Docker는 소프트웨어를 컨테이너라는 표준화된 유닛으로 패키징하며, 이 컨테이너에는 라이브러리, 시스템 도구, 코드, 런타임 등 소프트웨어를 실행하는 데 필요한 모든 것이 포함되어 있습니다. Docker를 사용하면 환경에 구애받지 않고 애플리케이션을 신속하게 배포 및 확장할 수 있으며 코드가 문제없이 실행될 것임을 확신할 수 있습니다.
AWS에서 Docker를 실행하면 개발자와 관리자가 어떠한 규모에서든 매우 안정적이며 저렴한 방식으로 애플리케이션을 구축, 제공 및 실행할 수 있습니다.

---

# Cloudidary
![스크린샷 2021-06-26 오후 10 06 06](https://user-images.githubusercontent.com/65009591/123513946-f9588d00-d6ca-11eb-9406-7fa42913942d.png)

Cloudinary 는 캘리포니아 산타 클라라에 본사 를두고 이스라엘, 영국, 폴란드 및 싱가포르에 지사를두고 있는 SaaS 기술 회사입니다. 이 회사는 클라우드 기반 이미지 및 비디오 관리 서비스를 제공합니다. 이를 통해 사용자는 웹 사이트 및 앱에 대한 이미지와 비디오를 업로드, 저장, 관리, 조작 및 전달할 수 있습니다.

여기서 SaaS는 클라우드 서비스의 한 종류로(IaaS, PaaS, SaaS) 서비스형 소프트웨어라고 하며 소프트웨어 및 관련 데이터는 중앙에 호스팅하고 사용자는 웹 브라우저 등의 클라이언트를 통해 접속하는 형태의 소프트웨어 전달 모델입니다.

우리 서비스에서는 서버의 부담을 줄이기위해 사용했습니다.

출처: https://velog.io/@hyeonyohwan/Firebase-Cloudinary%EB%9E%80

# Firebase
![스크린샷 2021-06-26 오후 10 05 32](https://user-images.githubusercontent.com/65009591/123513952-fc537d80-d6ca-11eb-8b5f-4b480b35a58b.png)

Firebase란?
파이어베이스(Firebase)는 2011년 파이어베이스(Firebase, Inc)사가 개발하고 2014년 구글에 인수된 모바일 및 웹 애플리케이션 개발 플랫폼입니다.
우리 서비스에선 실시간 데이터 베이스와 구글 OAUTH를 빠르게 연동하기 위해 사용했습니다.

기능

- Firebase Analytics

  페이지뷰, 화면 뷰, 그리고 세션에 중점을 두는 대신 사용자들이 여러분의 앱에서 무엇을 하는지 파악할 수 있게 해준다. 또한 충돌 발생 시 이에 대한 정보를 개발자에게 전달해 앱의 안정성을 개선할 수 있도록 도와줍니다.

- Realtime Database

  실시간 데이터베이스와 백엔드 서비스를 제공한다. 어플리케이션 데이터를 고객 그리고 저장된 Firebase 클라우드와 자동 동기화할 수 있습니다.

- Storage

  이미지, 동영상 및 기타 대용량 파일을 저장하는 기능이다. 저장소는 대규모의 확장성을 제공하며, Google 클라우드 프로젝트에서 저장된 파일에 손쉽게 액세스할 수 있습니다.

- Firebase Cloud Messaging (FCM)

  클라우드에서 기기로 푸시하는 메시징 서비스입니다. 사용제한 없이 무료로 이용할 수 있는 FCM은 iOS, Android 및 웹 플랫폼을 지원하며, 높은 신뢰성을 갖고, 배터리를 최소한으로 사용하도록 최적화 되어있습니다. (푸시 알림 서비스라고 생각하면 됩니다.)

- Auth

  오직 클라이언트 사이드의 코드로 유저 인증 또는 로그인 서버를 제공합니다. 아래와 같은 방식으로 사용자 인증에 대한 기능이 있다. 즉, 회원가입과 로그인과 같은 사용자 계정 관련 기능을 쉽고 빠르게 활용할 수 있게 해줍니다.

- Test Lab

  Test Lab은 사용자들보다 먼저 앱에서 문제점을 발견하는 데 도움이 됩니다. apk 파일을 업로드하여 앱에 오류가 있는지 호스팅된 실제 기기를 활용해 분석해줍니다.

- Hosting

  기본적인 프론트 엔드 기반의 웹소스를 올릴 수 있다. 앱소개나 랜딩 페이지 등을 운영하도록 도와줍니다.

- Cloud Function

  서버 단에서 처리해야 하는 작업이 있을 때 사용한다. 다만, 딜레이가 있어 빠른 속도의 서비스 개발 시에는 적합하지 않습니다.

     ## 장단점
      Firebase의 장점
      실시간 서비스를 손쉽게 구축할 수 있으며, 클라이언트 개발을 진행하면서 바로바로 구조를 생성하고 변경할 수 있습니다.

      Firebase의 단점
      속도적인 측면에서도 일반적인 서버 구축보다 느리며, Database의 최대 용량이 1GB로 제한되어 있어 대규모 프로젝트나 빅데이터를 다루는 서비스를 개발하기에는 적합하지 않습니다.

출처 : https://velog.io/@hyeonyohwan/Firebase-Cloudinary%EB%9E%80
