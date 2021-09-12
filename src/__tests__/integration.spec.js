import moxios from "moxios";
// Helper Function
import { storeTest } from "../utils";
// Action
import { fetchIntro } from "../redux/Actions";

describe("Integration Test: Fetch Intro", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should update store correctly", () => {
		const expectedState = [
			{
				id: 1,
				name: "Leanne Graham",
				username: "Bret",
				email: "Sincere@april.biz",
				address: {
					street: "Kulas Light",
					suite: "Apt. 556",
					city: "Gwenborough",
					zipcode: "92998-3874",
					geo: {
						lat: "-37.3159",
						lng: "81.1496",
					},
				},
				phone: "1-770-736-8031 x56442",
				website: "hildegard.org",
				company: {
					name: "Romaguera-Crona",
					catchPhrase: "Multi-layered client-server neural-net",
					bs: "harness real-time e-markets",
				},
			},
		];

		const store = storeTest();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState,
			});
		});

		return store.dispatch(fetchIntro).then(() => {
			const newState = store.getState();
			expect(newState.IntroductionReducer).toBe(expectedState);
		});
	});
});
