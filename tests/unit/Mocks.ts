/*-
 *
 * Hedera Mirror Node Explorer
 *
 * Copyright (C) 2021 - 2022 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */



//
// Fungible token inspired from https://testnet.mirrornode.hedera.com/api/v1/tokens/0.0.29662956
//

export const SAMPLE_TOKEN = {
    "admin_key": null,
    "auto_renew_account": "0.0.29612329",
    "auto_renew_period": "7776000",
    "created_timestamp": "1644660150.233378000",
    "custom_fees": {
        "created_timestamp": "1644660150.233378000",
        "fixed_fees": [],
        "fractional_fees": []
    },
    "decimals": "0",
    "deleted": false,
    "expiry_timestamp": null,
    "fee_schedule_key": null,
    "freeze_default": false,
    "freeze_key": {
        "_type": "ED25519",
        "key": "09ca6ec0beaf66b2465ed17d3c9e3fc4072058640127320d6c5d30ca9b2ad8da"
    },
    "initial_supply": "1",
    "kyc_key": null,
    "max_supply": "0",
    "memo": "234234",
    "modified_timestamp": "1644660150.233378000",
    "name": "23423",
    "pause_key": null,
    "pause_status": "NOT_APPLICABLE",
    "supply_key": null,
    "supply_type": "INFINITE",
    "symbol": "QmVGABnvpbPwLcfG4iuW2JSzY8MLkALhd54bdPAbJxoEkB",
    "token_id": "0.0.29662956",
    "total_supply": "1",
    "treasury_account_id": "0.0.29624024",
    "type": "FUNGIBLE_COMMON",
    "wipe_key": {
        "_type": "ED25519",
        "key": "09ca6ec0beaf66b2465ed17d3c9e3fc4072058640127320d6c5d30ca9b2ad8da"
    }
}

export const SAMPLE_TOKEN_DUDE = {
    "admin_key": null,
    "auto_renew_account": "0.0.29612329",
    "auto_renew_period": "7776000",
    "created_timestamp": "1644660150.233378000",
    "custom_fees": {
        "created_timestamp": "1644660150.233378000",
        "fixed_fees": [],
        "fractional_fees": []
    },
    "decimals": "2",
    "deleted": false,
    "expiry_timestamp": null,
    "fee_schedule_key": null,
    "freeze_default": false,
    "freeze_key": {
        "_type": "ED25519",
        "key": "09ca6ec0beaf66b2465ed17d3c9e3fc4072058640127320d6c5d30ca9b2ad8da"
    },
    "initial_supply": "1",
    "kyc_key": null,
    "max_supply": "0",
    "memo": "234234",
    "modified_timestamp": "1644660150.233378000",
    "name": "23423 DUDE",
    "pause_key": null,
    "pause_status": "NOT_APPLICABLE",
    "supply_key": null,
    "supply_type": "INFINITE",
    "symbol": "QmVGABnvpbPwLcfG4iuW2JSzY8MLkALhd54bdPAbJxoEkB DUDE",
    "token_id": "0.0.29662957",
    "total_supply": "1",
    "treasury_account_id": "0.0.29624024",
    "type": "FUNGIBLE_COMMON",
    "wipe_key": {
        "_type": "ED25519",
        "key": "09ca6ec0beaf66b2465ed17d3c9e3fc4072058640127320d6c5d30ca9b2ad8da"
    }
}

//
// NFT inspired from https://mainnet-public.mirrornode.hedera.com/api/v1/tokens/0.0.748383
//

export const SAMPLE_NONFUNGIBLE = {
    "admin_key": {
        "_type": "ED25519",
        "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
    },
    "auto_renew_account": "0.0.700000",
    "auto_renew_period": "7776000",
    "created_timestamp": "1646580567.712861636",
    "custom_fees": {
        "created_timestamp": "1646580567.712861636",
        "fixed_fees": [],
        "royalty_fees": [
            {
                "amount":
                    {
                        "numerator": 500,
                        "denominator": 10000
                    },
                "collector_account_id": "0.0.617888"
            }
        ]
    },
    "decimals": "0",
    "deleted": false,
    "expiry_timestamp": null,
    "fee_schedule_key": null,
    "freeze_default": false,
    "freeze_key": {
        "_type": "ED25519",
        "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
    },
    "initial_supply": "0",
    "kyc_key": null,
    "max_supply": "150",
    "memo": "",
    "modified_timestamp": "1646600193.520332000",
    "name": "Ħ Frens Kingdom",
    "pause_key": {
        "_type": "ED25519",
        "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
    },
    "pause_status": "UNPAUSED",
    "supply_key": {
        "_type": "ED25519",
        "key": "42ad41de57a7c12a7abfa98cff4a62fb078158e08ec12da67e8547dd76fd588c"
    },
    "supply_type": "FINITE",
    "symbol": "ĦFRENSKINGDOM",
    "token_id": "0.0.748383",
    "total_supply": "2",
    "treasury_account_id": "0.0.700000",
    "type": "NON_FUNGIBLE_UNIQUE",
    "wipe_key": {
        "_type": "ED25519",
        "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
    }
}

export const SAMPLE_NONFUNGIBLE_DUDE =
    {
        "admin_key": {
            "_type": "ED25519",
            "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
        },
        "auto_renew_account": "0.0.700000",
        "auto_renew_period": "7776000",
        "created_timestamp": "1646580567.712861636",
        "custom_fees": {
            "created_timestamp": "1646580567.712861636",
            "fixed_fees": [],
            "royalty_fees": [
                {
                    "amount":
                        {
                            "numerator": 500,
                            "denominator": 10000
                        },
                    "collector_account_id": "0.0.617888"
                }
            ]
        },
        "decimals": "0",
        "deleted": false,
        "expiry_timestamp": null,
        "fee_schedule_key": null,
        "freeze_default": false,
        "freeze_key": {
            "_type": "ED25519",
            "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
        },
        "initial_supply": "0",
        "kyc_key": null,
        "max_supply": "150",
        "memo": "",
        "modified_timestamp": "1646600193.520332000",
        "name": "Ħ Frens Kingdom Dude",
        "pause_key": {
            "_type": "ED25519",
            "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
        },
        "pause_status": "UNPAUSED",
        "supply_key": {
            "_type": "ED25519",
            "key": "42ad41de57a7c12a7abfa98cff4a62fb078158e08ec12da67e8547dd76fd588c"
        },
        "supply_type": "FINITE",
        "symbol": "ĦFRENSKINGDOM",
        "token_id": "0.0.748384",
        "total_supply": "2",
        "treasury_account_id": "0.0.700000",
        "type": "NON_FUNGIBLE_UNIQUE",
        "wipe_key": {
            "_type": "ED25519",
            "key": "c1a8c8c5b446ce053b6eff4fe4f0192f76535ea9ed6b2b91981177ba237f4b5d"
        }
    }

export const SAMPLE_TOKENS = {
    tokens: [
        SAMPLE_TOKEN,
        SAMPLE_NONFUNGIBLE
    ]
}

export const SAMPLE_BALANCES = {
    "timestamp": "1646726400.100874000",
    "balances": [
        {
            "account": "0.0.29693911",
            "balance": 1
        },
        {
            "account": "0.0.29624024",
            "balance": 0
        }
    ],
}

export const SAMPLE_NFTS = {
    "nfts": [
        {
            "account_id": "0.0.700000",
            "created_timestamp": "1646600193.520332000",
            "deleted": false,
            "metadata": "YmFma3JlaWI1NXRwbG10YW5jbzQ2dG1qNzVudGF0dHJieW50aGpvcTJuYmdhbnF0NHA3bnI0ZWczNzQ=",
            "modified_timestamp": "1646600193.520332000",
            "serial_number": 2,
            "token_id": "0.0.748383"
        },
        {
            "account_id": "0.0.700000",
            "created_timestamp": "1646599959.709228732",
            "deleted": false,
            "metadata": "YmFma3JlaWJ1MjVhamFhbmtiM2J4aWh1bG9iZDI3ZGEyaW5xeTZreW10bjVtemxjdDZyZTdkaG9oNG0=",
            "modified_timestamp": "1646599959.709228732",
            "serial_number": 1,
            "token_id": "0.0.748383"
        }
    ]
}


//
// https://testnet.mirrornode.hedera.com/api/v1/transactions/0.0.29624024-1646025139-152901498
//

export const SAMPLE_TRANSACTION = {
    "bytes": null,
    "charged_tx_fee": 470065,
    "consensus_timestamp": "1646025151.667604000",
    "entity_id": SAMPLE_TOKEN.token_id,
    "max_fee": "100000000",
    "memo_base64": "",
    "name": "CRYPTOTRANSFER",
    "node": "0.0.7",
    "nonce": 0,
    "parent_consensus_timestamp": null,
    "result": "SUCCESS",
    "scheduled": false,
    "token_transfers": [
        {
            "token_id": "0.0.29662956",
            "account": "0.0.29624024",
            "amount": -1
        },
        {
            "token_id": "0.0.29662956",
            "account": "0.0.29693911",
            "amount": 1
        }
    ],
    "transaction_hash": "oBKWEjLtfShCg26V9+nENW/f4t4IGZCRcBqWnB0f2TZx0weO6Dso+0YKiLTL2OzS",
    "transaction_id": "0.0.29624024-1646025139-152901498",
    "transfers": [
        {
            "account": "0.0.7",
            "amount": 22028
        },
        {
            "account": "0.0.98",
            "amount": 448037
        },
        {
            "account": "0.0.29624024",
            "amount": -470065
        }
    ],
    "valid_duration_seconds": "120",
    "valid_start_timestamp": "1646025139.152901498",
}

export const SAMPLE_FAILED_TRANSACTION = {
    "bytes": null,
    "charged_tx_fee": 120694790,
    "consensus_timestamp": "1652256326.071602560",
    "entity_id": "0.0.34739492",
    "max_fee": "1000000000",
    "memo_base64": "",
    "name": "CONTRACTCALL",
    "node": "0.0.3",
    "nonce": 0,
    "parent_consensus_timestamp": null,
    "result": "CONTRACT_REVERT_EXECUTED",
    "scheduled": false,
    "transaction_hash": "kLnhFcr1zLlhcuH4Doz6VF20IB4dEaxomChYqSie0+xkDNwaWrd2UFWl0ZxWYStj",
    "transaction_id": "0.0.34376678-1652256313-310050890",
    "transfers": [
        {
            "account": "0.0.3",
            "amount": 1719386,
            "is_approval": false
        },
        {
            "account": "0.0.98",
            "amount": 118975404,
            "is_approval": false
        },
        {
            "account": "0.0.34376678",
            "amount": -120694790,
            "is_approval": false
        }
    ],
    "valid_duration_seconds": "120",
    "valid_start_timestamp": "1652256313.310050890"
}

export const SAMPLE_TRANSACTIONS = {
    "transactions": [
        SAMPLE_TRANSACTION
    ]
}

export const SAMPLE_FAILED_TRANSACTIONS = {
    "transactions": [
        SAMPLE_FAILED_TRANSACTION
    ]
}

// https://mainnet-public.mirrornode.hedera.com/api/v1/transactions?limit=2&transactiontype=CONTRACTCALL

export const SAMPLE_CONTRACTCALL_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 95515604,
            "consensus_timestamp": "1646665766.574738471",
            "entity_id": "0.0.749774",
            "max_fee": "10000000000",
            "memo_base64": "TWlycm9yIE5vZGUgYWNjZXB0YW5jZSB0ZXN0OiAyMDIyLTAzLTA3VDE1OjA5OjI2LjA2NjY4MDk3N1ogRXhlY3V0ZSBjb250cmFjdA==",
            "name": "CONTRACTCALL",
            "node": "0.0.3",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "INSUFFICIENT_GAS",
            "scheduled": false,
            "transaction_hash": "rW+y3bjDPq1I3d7WeeyNbROuerh9oG8xcthiCodI5Q1xMHXInn3qOUR7TLj6LNQo",
            "transaction_id": "0.0.950-1646665756-235554077",
            "transfers": [
                {
                    "account": "0.0.3",
                    "amount": 881921
                },
                {
                    "account": "0.0.98",
                    "amount": 94633683
                },
                {
                    "account": "0.0.950",
                    "amount": -95515604
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646665756.235554077"
        },
        {
            "bytes": null,
            "charged_tx_fee": 98634856,
            "consensus_timestamp": "1646664154.866913000",
            "entity_id": "0.0.749723",
            "max_fee": "10000000000",
            "memo_base64": "TWlycm9yIE5vZGUgYWNjZXB0YW5jZSB0ZXN0OiAyMDIyLTAzLTA3VDE0OjQyOjMzLjk4NzcxMTIwMlogRXhlY3V0ZSBjb250cmFjdA==",
            "name": "CONTRACTCALL",
            "node": "0.0.3",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "INSUFFICIENT_GAS",
            "scheduled": false,
            "transaction_hash": "Vz4cLGBUmxgYSaHJu1bcxi2/1Heildtgg3zSbpp2xX3jqG0PsQJJYdp0rg+9nV7h",
            "transaction_id": "0.0.950-1646664143-028737238",
            "transfers": [
                {
                    "account": "0.0.3",
                    "amount": 887925
                },
                {
                    "account": "0.0.98",
                    "amount": 97746931
                },
                {
                    "account": "0.0.950",
                    "amount": -98634856
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646664143.028737238"
        }
    ]
}

export const SAMPLE_SYSTEM_CONTRACT_CALL_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 0,
            "consensus_timestamp": "1662623752.949648610",
            "entity_id": "0.0.359",
            "max_fee": "0",
            "memo_base64": "",
            "name": "CONTRACTCALL",
            "node": null,
            "nonce": 2,
            "parent_consensus_timestamp": "1662623752.949648608",
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "LC8tH/tqkOEndC3ERShZO7n6NSxhdhbkSZJX3hnbwKAWaQ2KLMsg1DgaXByxrUEY",
            "transaction_id": "0.0.29511696-1662623740-379586211",
            "transfers": [],
            "valid_duration_seconds": null,
            "valid_start_timestamp": "1662623740.379586211"
        }
    ]
}

export const SAMPLE_CONTRACT_RESULT_DETAILS = {
    "amount": 0,
    "bloom": "0x00200001002000000001000090000000000000000000010000040000000000000000000040000000000000000001000000000000000000000000180000000000800000000000040000000000000000200000000000000000000208000000000000000000020800000000000000000800000800000000000000000040000000000000000000000000000002000000100100000000000000080000004000000000000080000000000020000000000000000040000000010000000000000000000000002100000000000000000000000080200000002000001000000000002020000000000000000000000000000000000040000000000000100000000000000020",
    "call_result": "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000174876e800000000000000000000000000000000000000000000000000000000000a4bd29a0000000000000000000000000000000000000000000000000000001b34393b8a",
    "contract_id": "0.0.1062787",
    "created_contract_ids": [],
    "error_message": null,
    "from": "0x00000000000000000000000000000000000ce9b4",
    "function_parameters": "0x18cbafe5000000000000000000000000000000000000000000000000000000174876e8000000000000000000000000000000000000000000000000000000001b2702b2a000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000ce9b4000000000000000000000000000000000000000000000000000001831e10602d000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000cba4400000000000000000000000000000000000000000000000000000000000d1ea60000000000000000000000000000000000000000000000000000000000103708",
    "gas_limit": 480000,
    "gas_used": 384000,
    "timestamp": "1662655535.645046772",
    "to": "0x0000000000000000000000000000000000103783",
    "hash": "0xc43db9eacf72c91629ac03088535dd9ae41059a2c1eefce3a528e04e7e908d2d994ebaa58139c9119dc83f567b162ce3",
    "block_hash": "0x9128e0c85440fb647c642d9b9982d339320105cc2b0287ea8cdb0d29e4a3dd2eaa2ecfbcd4ed69ca83200905b2991702",
    "block_number": 37392133,
    "logs": [
        {
            "address": "0x0000000000000000000000000000000000103783",
            "bloom": "0x00000001000000000001000010000000000000000000000000000000000000000000000040000000000000000001000000000000000000000000100000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000040000000000000100000000000000000",
            "contract_id": "0.0.1062787",
            "data": "0x000000000000000000000000000000000000000000000000000000174876e800",
            "index": 0,
            "topics": ["0x831ac82b07fb396dafef0077cea6e002235d88e63f35cbd5df2c065107f1e74a", "0x00000000000000000000000000000000000000000000000000000000000ce9b4", "0x000000000000000000000000aa52d22bf3c60319edde45553aef6483c463cca8"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a83",
            "bloom": "0x00000000002000000001000010000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000040000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000100000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000100000000000000020",
            "contract_id": "0.0.1084035",
            "data": "0x000000000000000000000000000000000000000000000000000000000a4bd29a",
            "index": 1,
            "topics": ["0x831ac82b07fb396dafef0077cea6e002235d88e63f35cbd5df2c065107f1e74a", "0x000000000000000000000000aa52d22bf3c60319edde45553aef6483c463cca8", "0x000000000000000000000000c9d6c8fe1a7bdbb273559aaf0c5fc8ae75bc6a6f"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a83",
            "bloom": "0x00000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000001000000000000000000000000000000000000000000000000000000000000000000000000000000020",
            "contract_id": "0.0.1084035",
            "data": "0x000000000000000000000000000000000000000000000000000068553a24f73e0000000000000000000000000000000000000000000000000000002e3c815cae",
            "index": 2,
            "topics": ["0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a83",
            "bloom": "0x00200000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000200000000000000000000000000000000000000000000800000000000000000000000800000000000000000000000000000000000000000000000002000000000000000000000000000000004000000000000000000000000020000000000000000000000000000000000000000000000000000100000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000020",
            "contract_id": "0.0.1084035",
            "data": "0x000000000000000000000000000000000000000000000000000000174876e80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a4bd29a",
            "index": 3,
            "topics": ["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822", "0x0000000000000000000000000000000000000000000000000000000000103783", "0x000000000000000000000000c9d6c8fe1a7bdbb273559aaf0c5fc8ae75bc6a6f"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a35",
            "bloom": "0x00000000002000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000040000000000000000000000000000000000000100000000000000000000000000000000000000080000000000000000000000000000040000000000000000000000000000000000100000000000000000000000000000000000000000000000000002000000000000000000000000000000000000040000000000000100000000000000000",
            "contract_id": "0.0.1083957",
            "data": "0x0000000000000000000000000000000000000000000000000000001b34393b8a",
            "index": 4,
            "topics": ["0x831ac82b07fb396dafef0077cea6e002235d88e63f35cbd5df2c065107f1e74a", "0x000000000000000000000000c9d6c8fe1a7bdbb273559aaf0c5fc8ae75bc6a6f", "0x00000000000000000000000000000000000000000000000000000000000ce9b4"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a35",
            "bloom": "0x00000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000080000000000000000000080000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            "contract_id": "0.0.1083957",
            "data": "0x0000000000000000000000000000000000000000000000000000003bc25f68f100000000000000000000000000000000000000000000000000009e42d8e5fa71",
            "index": 5,
            "topics": ["0x1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1"]
        },
        {
            "address": "0x0000000000000000000000000000000000108a35",
            "bloom": "0x00200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000800000000000000000000000000000200000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000004000000000000080000000000020000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000040000000000000000000000000000000",
            "contract_id": "0.0.1083957",
            "data": "0x000000000000000000000000000000000000000000000000000000000a4bd29a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001b34393b8a",
            "index": 6,
            "topics": ["0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822", "0x0000000000000000000000000000000000000000000000000000000000103783", "0x00000000000000000000000000000000000000000000000000000000000ce9b4"]
        },
        {
            "address": "0x0000000000000000000000000000000000103707",
            "bloom": "0x00000000000000000001000000000000000000000000010000040000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080200000000000000000000000002000000000000000000000000000000000000040000000000000100000000000000000",
            "contract_id": "0.0.1062663",
            "data": "0x0000000000000000000000000000000000000000000000000000001b34393b8a",
            "index": 7,
            "topics": ["0x831ac82b07fb396dafef0077cea6e002235d88e63f35cbd5df2c065107f1e74a", "0x00000000000000000000000000000000000000000000000000000000000ce9b4", "0x0000000000000000000000000000000000000000000000000000000000103707"]
        },
        {
            "address": "0x0000000000000000000000000000000000103707",
            "bloom": "0x00000000000000000001000000000000000000000000010000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000800000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000002020000000000000000000000000000000000040000000000000100000000000000000",
            "contract_id": "0.0.1062663",
            "data": "0x0000000000000000000000000000000000000000000000000000001b34393b8a",
            "index": 8,
            "topics": ["0x831ac82b07fb396dafef0077cea6e002235d88e63f35cbd5df2c065107f1e74a", "0x00000000000000000000000000000000000000000000000000000000000ce9b4", "0x0000000000000000000000000000000000000000000000000000000000000000"]
        },
        {
            "address": "0x0000000000000000000000000000000000103707",
            "bloom": "0x00000000000000000000000000000000000000000000010000040000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000208000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000080000000000000000000000000002000000000000000000000000000000000000040000000000000000000000000000000",
            "contract_id": "0.0.1062663",
            "data": "0x0000000000000000000000000000000000000000000000000000001b34393b8a",
            "index": 9,
            "topics": ["0x2717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b6398", "0x00000000000000000000000000000000000000000000000000000000000ce9b4", "0x00000000000000000000000000000000000000000000000000000000000ce9b4"]
        }
    ],
    "result": "SUCCESS",
    "transaction_index": 37,
    "state_changes": [],
    "status": "0x1",
    "failed_initcode": null,
    "access_list": null,
    "block_gas_used": 384000,
    "chain_id": null,
    "gas_price": null,
    "max_fee_per_gas": null,
    "max_priority_fee_per_gas": null,
    "r": null,
    "s": null,
    "type": null,
    "v": null,
    "nonce": null
}

// https://mainnet-public.mirrornode.hedera.com/api/v1/transactions?limit=2&transactiontype=CRYPTOTRANSFER

export const SAMPLE_CRYPTO_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 78643,
            "consensus_timestamp": "1646746059.558562000",
            "entity_id": null,
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CRYPTOTRANSFER",
            "node": "0.0.17",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "RYfHjZoGCeAr9K1CNwVMztmx/F2im7Ae3yHkI3thlluzucsoP0uEuj3bKq+Qh84x",
            "transaction_id": "0.0.14622-1646746046-722961649",
            "transfers": [
                {
                    "account": "0.0.17",
                    "amount": 2017
                },
                {
                    "account": "0.0.98",
                    "amount": 76626
                },
                {
                    "account": "0.0.14622",
                    "amount": -78643
                },
                {
                    "account": "0.0.14684",
                    "amount": 90000
                },
                {
                    "account": "0.0.14698",
                    "amount": -90000
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646746046.722961649"
        },
        {
            "bytes": null,
            "charged_tx_fee": 78643,
            "consensus_timestamp": "1646746059.040288661",
            "entity_id": null,
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CRYPTOTRANSFER",
            "node": "0.0.5",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "+eQ70U7gSMiSavPTAr1RoKsWipe3H/oef5CiZ051Xli73Dc0XxXdQPnwT8Sml9sE",
            "transaction_id": "0.0.19852-1646746046-457048377",
            "transfers": [
                {
                    "account": "0.0.5",
                    "amount": 2017
                },
                {
                    "account": "0.0.98",
                    "amount": 76626
                },
                {
                    "account": "0.0.14684",
                    "amount": 90000
                },
                {
                    "account": "0.0.14698",
                    "amount": -90000
                },
                {
                    "account": "0.0.19852", "amount": -78643
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646746046.457048377"
        }
    ]
}

// https://mainnet-public.mirrornode.hedera.com/api/v1/transactions?limit=2&transactiontype=CONSENSUSSUBMITMESSAGE

export const SAMPLE_MESSAGE_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 81424,
            "consensus_timestamp": "1646747943.996963039",
            "entity_id": "0.0.120438",
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CONSENSUSSUBMITMESSAGE",
            "node": "0.0.3",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "HGSDoR+EX3JmeINOPf7nxfD0SSsTWDQ3u02iPudAluSvIeu3yE0Is0P6lu1jlyvA",
            "transaction_id": "0.0.41104-1646747931-190710543",
            "transfers": [{"account": "0.0.3", "amount": 2705}, {
                "account": "0.0.98",
                "amount": 78719
            }, {"account": "0.0.41104", "amount": -81424}],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646747931.190710543"
        },
        {
            "bytes": null,
            "charged_tx_fee": 81340,
            "consensus_timestamp": "1646747943.962210931",
            "entity_id": "0.0.120438",
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CONSENSUSSUBMITMESSAGE",
            "node": "0.0.15",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "pgHT3L9tuWlYidtXt9uP5Q1v8MsJvQjMfN5wZBxb53J6MwlZfyY7xUokMej6J/hO",
            "transaction_id": "0.0.41099-1646747932-228613829",
            "transfers": [{"account": "0.0.15", "amount": 2700}, {
                "account": "0.0.98",
                "amount": 78640
            }, {"account": "0.0.41099", "amount": -81340}],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646747932.228613829"
        }
    ]
}

// https://mainnet-public.mirrornode.hedera.com/api/v1/transactions?limit=2&transactiontype=CONSENSUSCREATETOPIC

export const SAMPLE_CREATETOPIC_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 4787240,
            "consensus_timestamp": "1646676908.667585920",
            "entity_id": "0.0.750040",
            "max_fee": "200000000",
            "memo_base64": "",
            "name": "CONSENSUSCREATETOPIC",
            "node": "0.0.5",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "kU7imDB9zIs8ocmjh+vJLHBubopaGVPEm7Sg4UliizruYRbD0FeiFrF6SwUDgN4w",
            "transaction_id": "0.0.636139-1646676896-310548965",
            "transfers": [{"account": "0.0.5", "amount": 231332}, {
                "account": "0.0.98",
                "amount": 4555908
            }, {"account": "0.0.636139", "amount": -4787240}],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646676896.310548965"
        },
        {
            "bytes": null,
            "charged_tx_fee": 5325187,
            "consensus_timestamp": "1646666058.899406000",
            "entity_id": "0.0.749794",
            "max_fee": "2000000000",
            "memo_base64": "TWlycm9yIE5vZGUgYWNjZXB0YW5jZSB0ZXN0OiAyMDIyLTAzLTA3VDE1OjE0OjE4LjE2NzU1NTA1OFogQ3JlYXRlIFRvcGlj",
            "name": "CONSENSUSCREATETOPIC",
            "node": "0.0.3",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "Bj5AhikOLdBux8XYp8XNzK8wzCfX0ForHEIRb/QkkaFatWBbbhJ1yCee0y2Rc0IS",
            "transaction_id": "0.0.950-1646666046-105179272",
            "transfers": [{"account": "0.0.3", "amount": 247218}, {
                "account": "0.0.98",
                "amount": 5077969
            }, {"account": "0.0.950", "amount": -5325187}],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646666046.105179272"
        }
    ]
}

export const SAMPLE_REWARDS_TRANSACTIONS = {
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 78643,
            "consensus_timestamp": "1646746059.558562000",
            "entity_id": null,
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CRYPTOTRANSFER",
            "node": "0.0.17",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "RYfHjZoGCeAr9K1CNwVMztmx/F2im7Ae3yHkI3thlluzucsoP0uEuj3bKq+Qh84x",
            "transaction_id": "0.0.14622-1646746046-722961649",
            "transfers": [
                {
                    "account": "0.0.17",
                    "amount": 2017
                },
                {
                    "account": "0.0.98",
                    "amount": 76626
                },
                {
                    "account": "0.0.14622",
                    "amount": -78643
                },
                {
                    "account": "0.0.800",
                    "amount": -123456789,
                    "is_approval": false
                },
                {
                    "account": "0.0.15818224",
                    "amount": 123456789,
                    "is_approval": false
                },
                {
                    "account": "0.0.14684",
                    "amount": 90000
                },
                {
                    "account": "0.0.14698",
                    "amount": -90000
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646746046.722961649"
        },
        {
            "bytes": null,
            "charged_tx_fee": 273792,
            "consensus_timestamp": "1660577929.534382083",
            "entity_id": "0.0.47813131",
            "max_fee": "200000000",
            "memo_base64": "",
            "name": "CRYPTOUPDATEACCOUNT",
            "node": "0.0.3",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "j7iGcapZ01hw9tAmf5P1cojq3NEeONl5i43oBrknSD3uaPaS9BzKjkoEG4SHVWr3",
            "transaction_id": "0.0.47813131-1660577918-385318328",
            "transfers": [
                {
                    "account": "0.0.3",
                    "amount": 11070,
                    "is_approval": false
                },
                {
                    "account": "0.0.98",
                    "amount": 262722,
                    "is_approval": false
                },
                {
                    "account": "0.0.800",
                    "amount": -2334450720,
                    "is_approval": false
                },
                {
                    "account": "0.0.15818224",
                    "amount": 2334450720,
                    "is_approval": false
                },
                {
                    "account": "0.0.47813131",
                    "amount": -273792,
                    "is_approval": false
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1660577918.385318328"
        },
        {
            "bytes": null,
            "charged_tx_fee": 78643,
            "consensus_timestamp": "1646746059.040288661",
            "entity_id": null,
            "max_fee": "4000000",
            "memo_base64": "",
            "name": "CRYPTOTRANSFER",
            "node": "0.0.5",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "+eQ70U7gSMiSavPTAr1RoKsWipe3H/oef5CiZ051Xli73Dc0XxXdQPnwT8Sml9sE",
            "transaction_id": "0.0.19852-1646746046-457048377",
            "transfers": [
                {
                    "account": "0.0.5",
                    "amount": 2017
                },
                {
                    "account": "0.0.98",
                    "amount": 76626
                },
                {
                    "account": "0.0.14684",
                    "amount": 90000
                },
                {
                    "account": "0.0.800",
                    "amount": -234567890,
                    "is_approval": false
                },
                {
                    "account": "0.0.15818224",
                    "amount": 234567890,
                    "is_approval": false
                },
                {
                    "account": "0.0.14698",
                    "amount": -90000
                },
                {
                    "account": "0.0.19852", "amount": -78643
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1646746046.457048377"
        }
    ]
}

//
// https://testnet.mirrornode.hedera.com/api/v1/transactions/0.0.48113503-1662470948-432078184
//

export const SAMPLE_PARENT_CHILD_TRANSACTIONS = {
    "transactions":
        [{
            "bytes": null,
            "charged_tx_fee": 160800000,
            "consensus_timestamp": "1662470957.014478705",
            "entity_id": "0.0.48193749",
            "max_fee": "200000000",
            "memo_base64": "",
            "name": "CONTRACTCALL",
            "node": "0.0.5",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "jthcv17LsslWUAzQkuIzeVMFpwJ3Uf5g6sSp1aZ8qqSWTz52XhPaMGAzt/5UgYob",
            "transaction_id": "0.0.48113503-1662470948-432078184",
            "transfers": [{"account": "0.0.98", "amount": 160800000, "is_approval": false}, {
                "account": "0.0.48113503",
                "amount": -5160800000,
                "is_approval": false
            }, {"account": "0.0.48193749", "amount": 5000000000, "is_approval": false}],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1662470948.432078184"
        }, {
            "bytes": null,
            "charged_tx_fee": 0,
            "consensus_timestamp": "1662470957.014478706",
            "entity_id": "0.0.48193741",
            "max_fee": "0",
            "memo_base64": "",
            "name": "TOKENMINT",
            "nft_transfers": [{
                "is_approval": false,
                "receiver_account_id": "0.0.48113503",
                "sender_account_id": null,
                "serial_number": 1,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48113503",
                "sender_account_id": null,
                "serial_number": 2,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48113503",
                "sender_account_id": null,
                "serial_number": 3,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48113503",
                "sender_account_id": null,
                "serial_number": 4,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48113503",
                "sender_account_id": null,
                "serial_number": 5,
                "token_id": "0.0.48193741"
            }],
            "node": null,
            "nonce": 1,
            "parent_consensus_timestamp": "1662470957.014478705",
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "gLobKtgAWqka6N/3K5o2TS8XKeQIafH8wxkzZfycRJcOfJ7vccaR/6drUU8j6Xci",
            "transaction_id": "0.0.48113503-1662470948-432078184",
            "transfers": [],
            "valid_duration_seconds": null,
            "valid_start_timestamp": "1662470948.432078184"
        }, {
            "bytes": null,
            "charged_tx_fee": 0,
            "consensus_timestamp": "1662470957.014478707",
            "entity_id": null,
            "max_fee": "0",
            "memo_base64": "",
            "name": "CRYPTOTRANSFER",
            "nft_transfers": [{
                "is_approval": false,
                "receiver_account_id": "0.0.48193739",
                "sender_account_id": "0.0.48113503",
                "serial_number": 1,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48193739",
                "sender_account_id": "0.0.48113503",
                "serial_number": 2,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48193739",
                "sender_account_id": "0.0.48113503",
                "serial_number": 3,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48193739",
                "sender_account_id": "0.0.48113503",
                "serial_number": 4,
                "token_id": "0.0.48193741"
            }, {
                "is_approval": false,
                "receiver_account_id": "0.0.48193739",
                "sender_account_id": "0.0.48113503",
                "serial_number": 5,
                "token_id": "0.0.48193741"
            }],
            "node": null,
            "nonce": 2,
            "parent_consensus_timestamp": "1662470957.014478705",
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "Gqep6H2B3iE4id1qPG92q51LP20WXW7r53ujWlKekk8RBhYTfpFiD4iJBkK8UnGc",
            "transaction_id": "0.0.48113503-1662470948-432078184",
            "transfers": [],
            "valid_duration_seconds": null,
            "valid_start_timestamp": "1662470948.432078184"
        }]
}

//
// Account inspired from: https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/0.0.730631
//

export const SAMPLE_ACCOUNT = {
    "account": "0.0.730631",
    "alias": "CIQAAAH4AY2OFK2FL37TSPYEQGPPUJRP4XTKWHD62HKPQX543DTOFFQ",
    "auto_renew_period": 7776000,
    "balance": {
        "balance": 2342647909,
        "timestamp": "1646333100.356842286",
        "tokens": [
            {
                "token_id": SAMPLE_TOKEN.token_id,
                "balance": 10
            }
        ]
    },
    "deleted": false,
    "expiry_timestamp": null,
    "key":
        {
            "_type": "ED25519",
            "key": "aa2f7b3e759f4531ec2e7941afa449e6a6e610efb52adae89e9cd8e9d40ddcbf"
        },
    "max_automatic_token_associations": 0,
    "memo": "",
    "receiver_sig_required": false,
    "evm_address": null,
    "ethereum_nonce": null,
    "decline_reward": null,
    "staked_node_id": null,
    "staked_account_id": null,
    "stake_period_start" : null
}

//
// Account inspired from: https://mainnet-public.mirrornode.hedera.com/api/v1/accounts/0.0.730632
//

export const SAMPLE_ACCOUNT_DUDE = {
    "account": "0.0.730632",
    "alias": null,
    "auto_renew_period": 6666000,
    "balance": {
        "balance": 31669471,
        "timestamp": "1648548001.410978000",
        "tokens": [
            {
                "token_id": SAMPLE_TOKEN_DUDE,
                "balance": 99000000
            }
        ]
    },
    "deleted": false,
    "expiry_timestamp": "1649648001.410978000",
    "key": {"_type": "ED25519", "key": "38f1ea460e95d97eea13aefac760eaf990154b80a3608ab01d4a264944d68746"},
    "max_automatic_token_associations": 10,
    "memo": "Account Dude Memo in clear",
    "receiver_sig_required": true,
    "evm_address": null,
    "ethereum_nonce": null,
    "decline_reward": null,
    "staked_node_id": null,
    "staked_account_id": null,
    "stake_period_start" : null
}

export const SAMPLE_ACCOUNT_DELETED = {
    "account": "0.0.730632",
    "alias": null,
    "auto_renew_period": 6666000,
    "balance": {
        "balance": 31669471,
        "timestamp": "1648548001.410978000",
        "tokens": [
            {
                "token_id": SAMPLE_TOKEN_DUDE,
                "balance": 99000000
            }
        ]
    },
    "deleted": true,
    "expiry_timestamp": "1649648001.410978000",
    "key": {"_type": "ED25519", "key": "38f1ea460e95d97eea13aefac760eaf990154b80a3608ab01d4a264944d68746"},
    "max_automatic_token_associations": 10,
    "memo": "Account Dude Memo in clear",
    "receiver_sig_required": true,
    "evm_address": null,
    "ethereum_nonce": null,
    "decline_reward": null,
    "staked_node_id": null,
    "staked_account_id": null,
    "stake_period_start" : null
}

export const SAMPLE_ACCOUNT_STAKING_NODE = {
    "account": "0.0.730632",
    "alias": null,
    "auto_renew_period": 6666000,
    "balance": {
        "balance": 31669471,
        "timestamp": "1648548001.410978000",
        "tokens": []
    },
    "deleted": false,
    "expiry_timestamp": "1649648001.410978000",
    "key": {"_type": "ED25519", "key": "38f1ea460e95d97eea13aefac760eaf990154b80a3608ab01d4a264944d68746"},
    "max_automatic_token_associations": 10,
    "memo": "Account staking to account",
    "receiver_sig_required": true,
    "evm_address": null,
    "ethereum_nonce": null,
    "decline_reward": false,
    "staked_node_id": 1,
    "staked_account_id": null,
    "stake_period_start" : "1646333100.356842286"
}

export const SAMPLE_ACCOUNT_STAKING_ACCOUNT = {
    "account": "0.0.730632",
    "alias": null,
    "auto_renew_period": 6666000,
    "balance": {
        "balance": 31669471,
        "timestamp": "1648548001.410978000",
        "tokens": []
    },
    "deleted": false,
    "expiry_timestamp": "1649648001.410978000",
    "key": {"_type": "ED25519", "key": "38f1ea460e95d97eea13aefac760eaf990154b80a3608ab01d4a264944d68746"},
    "max_automatic_token_associations": 10,
    "memo": "Account staking to account",
    "receiver_sig_required": true,
    "evm_address": null,
    "ethereum_nonce": null,
    "decline_reward": true,
    "staked_node_id": null,
    "staked_account_id": "0.0.5",
    "stake_period_start" : "1646333100.356842286"
}

export const SAMPLE_ACCOUNTS = {
    "accounts": [
        SAMPLE_ACCOUNT
    ]
}

export const SAMPLE_ACCOUNT_BALANCES = {
    "timestamp": "1646728200.821070000",
    "balances": [
        {
            "account": "0.0.730631",
            "balance": 2342647909,
            "tokens": [
                {
                    "token_id": SAMPLE_TOKEN.token_id,
                    "balance": 998
                },
                {
                    "token_id": SAMPLE_NONFUNGIBLE.token_id,
                    "balance": 1
                }
            ]
        }
    ]
}

export const SAMPLE_ACCOUNT_HBAR_BALANCE = {
    "timestamp": "1646728200.821070000",
    "balances": [
        {
            "account": "0.0.730631",
            "balance": 2342647909,
            "tokens": []
        }
    ]
}


//
// Contract inspired from: https://mainnet-public.mirrornode.hedera.com/api/v1/contracts/0.0.749775
//

export const SAMPLE_CONTRACT = {
    "admin_key": {
        "_type": "ED25519",
        "key": "421050820e1485acdd59726088e0e4a2130ebbbb70009f640ad95c78dd5a7b38"
    },
    "auto_renew_period": 7776000,
    "contract_id": "0.0.749775",
    "created_timestamp": "1646665755.947488266",
    "deleted": false,
    "evm_address": "0x00000000000000000000000000000000000b70cf",
    "expiration_timestamp": null,
    "file_id": "0.0.749773",
    "memo": "Mirror Node acceptance test: 2022-03-07T15:09:15.228564328Z Create contract",
    "obtainer_id": null,
    "proxy_account_id": null,
    "timestamp": {
        "from": "1646665755.947488266",
        "to": null
    },
}

//
// Contract inspired from: https://mainnet-public.mirrornode.hedera.com/api/v1/contracts/0.0.803295
//

export const SAMPLE_CONTRACT_DUDE = {
    "admin_key": null,
    "auto_renew_period": 7776000,
    "contract_id": "0.0.803295",
    "created_timestamp": "1648377044.798291252",
    "deleted": false,
    "evm_address": "0x00000000000000000000000000000000000c41df",
    "expiration_timestamp": "1649648001.410978000",
    "file_id": "0.0.803267",
    "memo": "",
    "obtainer_id": null,
    "proxy_account_id": null,
    "timestamp": {"from": "1648377044.798291252", "to": null},
    "bytecode": "0x30783630383036303430353236303030" // deliberately kept only the first 16 bytes of the bytecode
}

export const SAMPLE_CONTRACT_DELETED = {
    "admin_key": null,
    "auto_renew_period": 7776000,
    "contract_id": "0.0.803295",
    "created_timestamp": "1648377044.798291252",
    "deleted": true,
    "evm_address": "0x00000000000000000000000000000000000c41df",
    "expiration_timestamp": "1649648001.410978000",
    "file_id": "0.0.803267",
    "memo": "",
    "obtainer_id": null,
    "proxy_account_id": null,
    "timestamp": {"from": "1648377044.798291252", "to": null},
    "bytecode": "0x30783630383036303430353236303030" // deliberately kept only the first 16 bytes of the bytecode
}

export const SAMPLE_CONTRACTS = {
    "contracts": [
        SAMPLE_CONTRACT
    ]
}

export const SAMPLE_CONTRACT_AS_ACCOUNT = {
    "account": "0.0.200611",
    "alias": "CIQAAAH4AY2OFK2FL37TSPYEQGPPUJRP4XTKWHD62HKPQX543DTOFFQ",
    "auto_renew_period": 7890000,
    "balance": {
        "balance": 200000000,
        "timestamp": "1646734500.576308000",
        "tokens": []
    },
    "deleted": false,
    "expiry_timestamp": null,
    "key": {
        "_type": "ED25519",
        "key": "f6628ec23113678f60cb6e7e3972ac0bfdec0c43c787c25fd626a05627700ba5"
    },
    "max_automatic_token_associations": null,
    "memo": "",
    "receiver_sig_required": null,
    "transactions": [
        {
            "bytes": null,
            "charged_tx_fee": 75871170,
            "consensus_timestamp": "1645373467.889797098",
            "entity_id": "0.0.200611",
            "max_fee": "200000000",
            "memo_base64": "c21hcnRDb250cmFjdEZ1bmN0aW9uRXhlY3V0ZTo6LXRyYW5zZmVyQW1vdW50LTo6VGFza2Jhcjo6U21hcnQgY29udHJhY3Qgc3RhdGUgY2hhbmdlIGNhbGwu",
            "name": "CONTRACTCALL",
            "node": "0.0.8",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "N174IhVVDxEtHG9iE3RKGhLgzWnKrTnPDolPjDVNLOldF3lU6IQdUVmM3zp8coQy",
            "transaction_id": "0.0.178899-1645373457-761328453",
            "transfers": [
                {
                    "account": "0.0.8",
                    "amount": 891611
                },
                {
                    "account": "0.0.98",
                    "amount": 74979559
                },
                {
                    "account": "0.0.178899",
                    "amount": -75871170
                },
                {
                    "account": "0.0.200611",
                    "amount": -100000000
                },
                {
                    "account": "0.0.689670",
                    "amount": 100000000
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1645373457.761328453"
        },
        {
            "bytes": null,
            "charged_tx_fee": 18787079,
            "consensus_timestamp": "1645373400.586655580",
            "entity_id": "0.0.200611",
            "max_fee": "200000000",
            "memo_base64": "c21hcnRDb250cmFjdEZ1bmN0aW9uRXhlY3V0ZTo6LWFkZEhiYXJzLTo6VGFza2Jhcjo6IEFkZGluZyBhbW91bnQgdG8gdGFzayBzbWFydC1jb250cmFjdA==",
            "name": "CONTRACTCALL",
            "node": "0.0.5",
            "nonce": 0,
            "parent_consensus_timestamp": null,
            "result": "SUCCESS",
            "scheduled": false,
            "transaction_hash": "H9P5awEyK5ApqNxwMVwQBUzshRJfIwWPVj/QPl5qL3qrqTTSzPIHqI/+A202qhpg",
            "transaction_id": "0.0.178899-1645373391-947654307",
            "transfers": [
                {
                    "account": "0.0.5", "amount": 885182
                },
                {
                    "account": "0.0.98",
                    "amount": 17901897
                },
                {
                    "account": "0.0.178899",
                    "amount": -118787079
                },
                {
                    "account": "0.0.200611",
                    "amount": 100000000
                }
            ],
            "valid_duration_seconds": "120",
            "valid_start_timestamp": "1645373391.947654307"
        }
    ],
}


//
// https://mainnet-public.mirrornode.hedera.com/api/v1/topics/0.0.642394/messages
//

export const SAMPLE_TOPIC_MESSAGES = {
    "messages": [
        {
            "chunk_info": null,
            "consensus_timestamp": "1642097190.065332012",
            "message": "YmFja2dyb3VuZE1lc3NhZ2U=",
            "payer_account_id": "0.0.950",
            "running_hash": "Qbj2w8zTxPQfB52pbwP/Quba5azJqmi0n0PvCaYL5+m3ytQuVoMREbYyjPYqnTS+",
            "running_hash_version": 3,
            "sequence_number": 6,
            "topic_id": "0.0.642394"
        },
        {
            "chunk_info": null,
            "consensus_timestamp": "1642097184.056478572",
            "message": "AAABflSejDhfTmV3IG1lc3NhZ2VfNQ==",
            "payer_account_id": "0.0.950",
            "running_hash": "8byKHCHutoTADN1e83GtFAMek+5BffakLZUuGOre0cAt3s4yk1jnxLvWsttLfs3n",
            "running_hash_version": 3,
            "sequence_number": 5,
            "topic_id": "0.0.642394"
        }
    ]
}

export const SAMPLE_TOPIC_DUDE_MESSAGES = {
    "messages": [{
        "chunk_info": null,
        "consensus_timestamp": "1642097145.865478140",
        "message": "AAABflSd9RZfTmV3IG1lc3NhZ2VfMQ==",
        "payer_account_id": "0.0.950",
        "running_hash": "nuY7eAuT59yV4x0YzKg38osujQL6bNvBMReh3wjBEb0mupTWK09MdZ3E31iizTB9",
        "running_hash_version": 3,
        "sequence_number": 1,
        "topic_id": "0.0.642393"
    }, {
        "chunk_info": null,
        "consensus_timestamp": "1642097150.887214000",
        "message": "AAABflSeCklfTmV3IG1lc3NhZ2VfMg==",
        "payer_account_id": "0.0.950",
        "running_hash": "Kt6tmLlY3qa3kKT3ODlnZjeIIeQkj4CcrbfBGGJBo+Gi60XJVNCPwkvgl5RZ8tF8",
        "running_hash_version": 3,
        "sequence_number": 2,
        "topic_id": "0.0.642393"
    }, {
        "chunk_info": null,
        "consensus_timestamp": "1642097156.871110000",
        "message": "YmFja2dyb3VuZE1lc3NhZ2U=",
        "payer_account_id": "0.0.950",
        "running_hash": "OZoXCNImUR6vm2LVot6EmO4TMCywXUvAl7GZ3ONpj2CmAWckrUscWWcMx6LRYsmw",
        "running_hash_version": 3,
        "sequence_number": 3,
        "topic_id": "0.0.642393"
    }]
}

//
// https://previewnet.mirrornode.hedera.com/api/v1/network/nodes
//

export const SAMPLE_NETWORK_NODES = {
    "nodes": [
        {
            "description": "",
            "file_id": "0.0.102",
            "memo": "0.0.3",
            "node_id": 0,
            "node_account_id": "0.0.3",
            "node_cert_hash": "0xffd6ada74a3a34a9",
            "public_key": "0x308201a2300d0609",
            "reward_rate_start": 2740,
            "service_endpoints": [
                {
                    "ip_address_v4": "3.211.248.172",
                    "port": 50211
                },
                {
                    "ip_address_v4": "3.211.248.172",
                    "port": 50212
                },
                {
                    "ip_address_v4": "35.231.208.148",
                    "port": 0
                },
                {
                    "ip_address_v4": "35.231.208.148",
                    "port": 50211
                },
                {
                    "ip_address_v4": "35.231.208.148",
                    "port": 50212
                },
            ],
            "timestamp": {
                "from": "1654531806.041135961",
                "to": null
            },
            "max_stake":         3000000000000000,
            "min_stake":          100000000000000,
            "stake_total":       2400000000000000,
            "stake":              600000000000000,
            "stake_not_rewarded": 100000000000000,
            "stake_rewarded":     500000000000000,
            "staking_period": null
        },
        {
            "description": "",
            "file_id": "0.0.102",
            "memo": "0.0.4",
            "node_id": 1,
            "node_account_id": "0.0.4",
            "node_cert_hash": "0xffd6ada74a3a34a9",
            "public_key": "0x308201a2300d0609",
            "reward_rate_start": 5479,
            "service_endpoints": [
                {
                    "ip_address_v4": "3.133.213.146",
                    "port": 50211
                },
                {
                    "port": 50212
                }
            ],
            "timestamp": {
                "from": "1654531806.041135961",
                "to": null
            },
            "max_stake":         3000000000000000,
            "min_stake":          100000000000000,
            "stake_total":       2400000000000000,
            "stake":              900000000000000,
            "stake_not_rewarded": 200000000000000,
            "stake_rewarded":     700000000000000,
            "staking_period": null
        },
        {
            "description": "",
            "file_id": "0.0.102",
            "memo": "0.0.5",
            "node_id": 2,
            "node_account_id": "0.0.5",
            "node_cert_hash": "0xffd6ada74a3a34a9",
            "public_key": "0x308201a2300d0609",
            "reward_rate_start": 8219,
            "service_endpoints": [
                {
                    "ip_address_v4": "3.133.213.146",
                    "port": 50211
                },
                {
                    "ip_address_v4": "3.133.213.147"
                }
            ],
            "timestamp": {
                "from": "1654531806.041135961",
                "to": null
            },
            "max_stake":         3000000000000000,
            "min_stake":          100000000000000,
            "stake_total":       2400000000000000,
            "stake":              900000000000000,
            "stake_not_rewarded": 200000000000000,
            "stake_rewarded":     700000000000000,
            "staking_period": null
        }
    ],
}

//
// https://testnet.mirrornode.hedera.com/api/v1/network/stake
//

export const SAMPLE_NETWORK_STAKE = {
    "max_staking_reward_rate_per_hbar": 0,
    "node_reward_fee_fraction": 0,
    "stake_total": 2400000000000000,
    "staking_period": {
        "from": "1661212800.000000000",
        "to": "1661299200.000000000"
    },
    "staking_period_duration": 0,
    "staking_periods_stored": 0,
    "staking_reward_fee_fraction": 0,
    "staking_reward_rate": 0,
    "staking_start_threshold": 0
}

//
// https://mainnet-public.mirrornode.hedera.com/api/v1/network/supply
//

export const SAMPLE_NETWORK_SUPPLY = {
    "released_supply": "2108462088443004452",
    "timestamp": "1654245000.545436000",
    "total_supply": "5000000000000000000"
}

//
// https://previewnet.mirrornode.hedera.com/api/v1/blocks?timestamp=gte:1662111646.528325857&limit=1
//

export const SAMPLE_BLOCKSRESPONSE = {
    "blocks": [{
        "count": 1,
        "hapi_version": "0.30.0",
        "hash": "0xe4416a679dc2d757e4f179501bbf8ab0f90b4aa2a69c60366919606e4d5e447cb501e90e9224de836cfcedbc72c0c559",
        "name": "2022-09-02T09_45_08.062537644Z.rcd.gz",
        "number": 271027,
        "previous_hash": "0xa3cf2030a81300c57f5f16ce90d2fb6aacef13cb1412b9c89f50792742544dc10460626ca8554e7a87e162c7d3218b2e",
        "size": 840,
        "timestamp": {"from": "1662111908.062537644", "to": "1662111908.062537644"},
        "gas_used": 0,
        "logs_bloom": "0x"
    }]
}

//
// https://api.coingecko.com/api/v3/coins/hedera-hashgraph
//

export const SAMPLE_COINGECKO = {

    "market_data": {
        "current_price": {
            "usd": 0.246033,
        },
        "market_cap": {
            "usd": 4486259941,
        },
        "price_change_percentage_24h": 8.41776,
        "market_cap_change_percentage_24h": 8.42424
    }

}
