export default class HistoryUtil {
    static goBack() {
        history.go(-1);
    }

    static goForward() {}

    static pushHistory() {}

    static popHistory() {}

    static listHistory() {}

    static addHistoryBackListener(backFn) {
        let pushHistory = () => {
            var state = {
                title: document.title,
                url: location.href
            };
            window.history.pushState(state, state.title, state.href);
        };

        pushHistory();
        window.addEventListener(
            "popstate",
            function(e) {
                backFn && backFn();
            },
            false
        );
    }
}
