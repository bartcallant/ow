import predicates, {Predicates} from './predicates';

export interface Modifiers {
	/**
	Make the following predicate optional so it doesn't fail when the value is `undefined`.
	*/
	readonly optional: Predicates;

	/**
	Make the following predicate also nullable so it doen't fail when the value is `null`.
	*/
	readonly nullable: Predicates;
}

export default <T>(object: T): T & Modifiers => {
	Object.defineProperties(object, {
		optional: {
			get: () => predicates({}, {optional: true})
		},
		nullable: {
			get: () => predicates({}, {nullable: true})
		}
	});

	return object as T & Modifiers;
};
