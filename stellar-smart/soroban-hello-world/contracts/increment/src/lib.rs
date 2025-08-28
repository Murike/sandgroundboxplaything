#![no_std]
use soroban_sdk::{contract, contractimpl, log, symbol_short, Env, Symbol};

const COUNTER: Symbol = symbol_short!("COUNTER");

#[contract]
pub struct IncrementContract;

// <https://developers.stellar.org/docs/build/smart-contracts/overview>.
#[contractimpl]
impl IncrementContract {
    pub fn increment(env: Env) -> u32 {
        let mut count: u32 = env.storage().instance().get(&COUNTER).unwrap_or(0);
        log!(&env, "count: {}", count);

        count += 1;

        env.storage().instance().set(&COUNTER, &count);
        env.storage().instance().extend_ttl(50, 100);

        count
    }

    pub fn get_current_value(env: Env) -> u32 {
        let count: u32 = env.storage().instance().get(&COUNTER).unwrap_or(0);
        log!(&env, "count: {}", count);

        count
    }
}

mod test;
