import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundary  from 'page/error';

function resolveAsyncCompoment(LazyCompoment, routeProps) {
  return <div>
    <ErrorBoundary>
      <Suspense fallback={<div>loading~~~~</div>}>
        <LazyCompoment {...routeProps}></LazyCompoment>
      </Suspense>
    </ErrorBoundary>
    </div>
}

function RenderRouter(props) {
  const {
    path,
    component,
    ...otherProps
  } = props;
  if (!component) {
    return <Route path={path} {...otherProps} />
  }
  if(props.authority && !props.permission) {
    let AuthorityError = React.lazy(() => import('page/error/authorityError'));
    return <Route path={path} {...otherProps} render={(routeProps) => {
      return resolveAsyncCompoment(AuthorityError, routeProps);
    }} />
  }
  return <Route path={path} {...otherProps} render={(routeProps) => {
    return resolveAsyncCompoment(component, routeProps);
  }} />
}

export default RenderRouter

