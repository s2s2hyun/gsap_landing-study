import { useEffect, useLayoutEffect } from "react";

// useIsomorphicLayoutEffect 는 서버사이드 렌더링 환경에서 사용하는 유틸리티 훅입니다.
// 이것의 목적은 useLayoutEffect 와 useEffect 간 호환성 문제를 해결하기 위해서 입니다.

//  React 에서 useLayoutEffect 는 DOM 업데이트를 동기적으로 실행하며 , 브라우저의 다음 페인트 직전에
//  코드를 실행합니다. 이것은 DOM 뮤테이션을 바로 실행하거나 사이드 이펙트를 동기적으로 발생시키기 위해 사용됩니다.
//  그러나 서버 사이드 렌더링에서는 useLayoutEffect 가 아무 의미가 없습니다. 왜냐하면 SSR 에서는 DOM 이 실제로 없기 때문입니다.
//  따라서 , useLayoutEffect 를 사용하면 경고가 발생합니다.

// - window 객체가 있으면 , 클라이언트 사이드 이므로 useLayoutEffect 를 사용하고, window 객체가 없으면 서버사이드 이므로 , useEffect 를 사용합니다.
//  이렇게 사용함으로써 동일한 코드가 클라이언트와 서버 모두 경고없이 실행될 수 있습니다.
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
