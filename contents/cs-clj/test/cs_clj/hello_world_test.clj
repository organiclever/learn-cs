(ns cs-clj.hello-world-test
  (:require [clojure.test :refer :all]
            [cs-clj.hello-world :as hello]))

(deftest hello-test
  (testing "Hello function prints 'Hello, World!'"
    (is (= "Hello, World!\n"
           (with-out-str (hello/hello))))))