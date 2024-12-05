export const getReviewWordWithEnding = (reviewCount: number) => {
	switch (true) {
		case reviewCount === 1 ||
			(reviewCount % 10 === 1 && reviewCount !== 11):
			return `${reviewCount} review`
		case reviewCount === 2 ||
			reviewCount === 3 ||
			reviewCount === 4 ||
			(reviewCount % 10 >= 2 &&
				reviewCount % 10 <= 4 &&
				!(reviewCount % 100 >= 10 && reviewCount % 100 <= 20)):
			return `${reviewCount} reviews`
		default:
			return `${reviewCount} reviews`
	}
}
