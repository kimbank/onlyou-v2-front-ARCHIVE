const datadogRum = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,u,n,d) {
            h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
            d=o.createElement(u);d.async=1;d.src=n
            n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
          })(window,document,'script','https://www.datadoghq-browser-agent.com/us5/v5/datadog-rum.js','DD_RUM')
          window.DD_RUM.onReady(function() {
            window.DD_RUM.init({
              clientToken: 'pub66262f6057584eeedf737f7b5839d12b',
              applicationId: '0bc3679b-06d7-48a3-b210-1110ac9abcbb',
              site: 'us5.datadoghq.com',
              service: 'onlyou-v2-front',
              env: 'prod',
              version: '2.0.0', 
              sessionSampleRate: 100,
              sessionReplaySampleRate: 20,
              trackUserInteractions: true,
              trackResources: true,
              trackLongTasks: true,
              defaultPrivacyLevel: 'mask-user-input',
            });

            window.DD_RUM.startSessionReplayRecording(); // Start recording session replay
          })
            `,
          }} 
      />
    </>
  )
}

export default datadogRum;
